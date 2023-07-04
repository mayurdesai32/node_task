# 1 Do npm i

# 2 Create an .env file with following input

SMTP_HOST=""
EMAIL_USER=""
EMAIL_PASSWORD=""

connectString
SQL_USER=""
SQL_PASSWORD=""
SQL_PASSWORD_CONNECTIONSTR=""



# 1 task  

- fetchDataAndSaveToCSV function require 2 parameter query, filePath 
- when user give sql query and filepath function will execute the sql query and save the result in csv file as the filepath is mention


# 2 task  (sendgrid)
- sendEmail function require 3 parameter EmailSubject, EmailMessage, ToEmail
- this function uses sendgrid api it is required to create sendgrid account and generate api  
- after providing require parameter it will send the mail


# 2 task   (normal)
- sendEmail function require 3 parameter EmailSubject, EmailMessage, ToEmail
- this function uses directly email so it required email account to have less secure active
- after providing require parameter it will send the mail