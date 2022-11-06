import pandas as pd
from statistics import mean
from datetime import date
from sklearn.preprocessing import StandardScaler, normalize
from sklearn.mixture import GaussianMixture
import glob
import os
#list_of_files = glob.glob('Data.txt')
#latest_file = max(list_of_files, key=os.path.getctime)
data = pd.read_csv("data_final.txt",header=0,sep=';')

data['Age']=2022-data['Year_Birth']

data['Spending']=data['MntWines']+data['MntFruits']+data['MntMeatProducts']+data['MntFishProducts']+data['MntSweetProducts']+data['MntGoldProds']
last_date = date(2015,10,23)
data['Seniority']=pd.to_datetime(data['Dt_Customer'], dayfirst=True,format = '%Y-%m-%d')
data['Seniority'] = pd.to_numeric(data['Seniority'].dt.date.apply(lambda x: (last_date - x)).dt.days, downcast='integer')/30

data=data.rename(columns={'MntWines': "Wines",'MntFruits':'Fruits','MntMeatProducts':'Meat','MntFishProducts':'Fish','MntSweetProducts':'Sweets','MntGoldProds':'Gold'})

data=data[['ID','Age','Education','Marital_Status','Income','Spending','Seniority','Wines','Fruits','Meat','Fish','Sweets','Gold']]

data=data.dropna(subset=['Income'])
data=data[data['Income']<600000]

scaler=StandardScaler()
dataset_temp=data[['Income','Seniority','Spending']]
X_std=scaler.fit_transform(dataset_temp)
X = normalize(X_std,norm='l2')

gmm=GaussianMixture(n_components=4, covariance_type='spherical',max_iter=2000, random_state=5).fit(X)
labels = gmm.predict(X)
dataset_temp['Cluster'] = labels
dataset_temp=dataset_temp.replace({0:'Devoted',1:'Focus',2:'Capable',3:'Weak'})
data = data.merge(dataset_temp.Cluster, left_index=True, right_index=True)

d=0
f=0
c=0
w=0
sum=0

for i in data['Cluster']:
    if i=='Devoted':
        sum=sum+100
        d+=1
    elif i=='Focus':
        sum=sum+80
        f+=1
    elif i=='Capable':
        sum=sum+50
        c+=1
    else:
        sum=sum+20
        w+=1
l1=['Devoted','Focus','Capable','Weak']
l2=[d,f,c,w]
m=min(l2, key=lambda x:abs(x-mean(l2)))
out=l1[l2.index(m)]
mean=int(sum/(d+f+c+w))
# Import flask and datetime module for showing date and time
from flask import Flask
  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data
@app.route('/data')
def get_time():
    # Returning an api for showing in  reactjs
    return {
        'Devoted': d, 
        "Focus": f,
        "Capable": c, 
        "Weak": w,
        "Mean":out,
        "Loyalty":mean
        }
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)