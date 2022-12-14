# Restaurant Analysis :plate_with_cutlery:

### About :clipboard:
This is the group project of Group 6 in Fall 2022 - COMP4462 Data Visualization. 

The dashboard below shows data of restaurants' reviews in the US. Yelp dataset and obesity dataset were used from Kaggle.

Data preprocessing code can be found in a Jupyter notebook located in {"/src/backend-jupyter"} directory. The datasets need to be unzip and run in the Jupyter notebook.

Contributors:
+ {Alex} Front-end Developer
+ {Tom} Front-end dashboard
+ {Beatrice} Front-end dashboard
+ {Kitty} Data preprocessing
+ {Janice} Data preprocessing

### How to run Dashboard 
  > ```
  > # 1. clone our project code
  > git clone https://github.com/AlexSze/comp4462-final-project
  > cd comp4462-final-project
  > 
  > # 2. unzip the dataset
  > unzip the ./src/data/yelp_restaurants_review_Obesity.json.zip
  > unzip the ./src/data/heatMapData.json.zip
  > 
  > # 3. install the packages
  > npm i
  > ( if you do not have npm on your machine, please install nodejs here: https://nodejs.org/en/download/ )
  >
  > # 3. start the local server
  > npm start
  > ( Due to the overwhelming data size, it is possible for our frontend to consume all your computer memory. Please close all browser tab and try again if this problem arise.)
  
### How to run Backend 
  > ```
  > # 1. download the yelp dataset from https://www.kaggle.com/datasets/yelp-dataset/yelp-dataset (We cannot upload the dataset to our github repo because even after zipping, it is over 4gb)
  > 
  > # 2. put the downloaded file to "/src/backend-jupyter" directory
  > 
  > # 3. open the "Data_Processing.ipynb" 
  > 
  > # 4. press the "Run All" button under the cell column
  > ( Due to the overwheling original dataset (6GB), the data preprocessing may takes time when running with Jupyter Notebook)
  > 
  > # 5. the output .json & .csv file will be export to the same directory.
  



  

  
