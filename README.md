# Project Title 

Web Automation Project for Evaluation at Vanguard


### Envionment

Node Version v10.15.2
Protractor v5.4.4

### How to run
Open two termainals

a) To run selenium on local machine, run below command
    npm run server

b) To run test, run following command 
   npm run test

c) To parameterize test to run with different host url(replace ENV_HOST with respective environment values)
   $(npm bin)/protractor --params.appUrl="ENV_HOST" --params.appCompareHostUrl="ENV_HOST" conf.js


   ## ISSUE REPORTED
   Note: All error files/screenshots are in error folder

   i) When Replacing the first fund, add button should be disable untill replacement fund is selected
      Refer Screenshot: On_Replacing_Fund_Gets_Unselected_On_Navigation.webm


   ii)Does not allow to add fund in the last add fund section
      Refer error_in_adding_last_fund.webm

   iii) Search fund dialog box appears intermittently with empty values when adding fund by identifier/name
       Refer screen.jpg
     



   ## What else could be done

   a) Test can be better optimized with waits

   b) Test can be made to run of different browser simultaneously with remote web driver

   c) Application can be tested for responsivness

   c) Test can be paramterized with fund names and identifiers

   d) Retrying failing tests can be achienved with help of other libraries
   