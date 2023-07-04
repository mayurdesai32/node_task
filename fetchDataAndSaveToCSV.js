const fs = require("fs");
require("dotenv").config();
const oracledb = require("oracledb");

const connectionConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  connectString: process.env.SQL_PASSWORD_CONNECTIONSTR,
};

async function fetchDataAndSaveToCSV(query, filePath) {
  try {
    const connection = await oracledb.getConnection(connectionConfig);
    console.log("Connected to the database.");

    const result = await connection.execute(query);
    const results = result.rows;

    const csvData = results.map((row) => {
      return row.join(",");
    });

    const csvContent = csvData.join("\n");

    await fs.promises.writeFile(filePath, csvContent);
    console.log("CSV file has been written successfully.");

    await connection.close();
    console.log("Connection to the database has been closed.");
  } catch (error) {
    console.error("Error fetching data and saving to CSV: ", error);
  }
}
