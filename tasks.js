const sendEmail2 = require("./sendEmail2");
const sendEmail = require("./sendEmail");
const fetchDataAndSaveToCSV = require("./fetchDataAndSaveToCSV");

//TASK1

const query = "SELECT * FROM mytable";
const filePath = "output.csv";

fetchDataAndSaveToCSV(query, filePath);

//TASK2

sendEmail2("EmailSubject", "EmailMessage", "msdesai32@gmail.com");

sendEmail("EmailSubject", "EmailMessage", "msdesai32@gmail.com");
