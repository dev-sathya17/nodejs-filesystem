// Importing required packages.
const express = require("express");
const fs = require("fs");

// Creating an express app.
const app = express();

// Creating the date Object to work with date n time.
const dateObj = new Date();

// Getting date values and formatting them into a single string.
const date = `${dateObj.getDate()}-${
  dateObj.getMonth() + 1
}-${dateObj.getFullYear()}`;

// Getting time values and formatting them into a single string.
const time = `${dateObj.getHours()}-${dateObj.getMinutes()}-${dateObj.getSeconds()}`;

// Creating a data to be inserted within the file.
const data = `Current Timestamp: ${date.replaceAll("-", "/")}-${time.replaceAll(
  "-",
  ":"
)}`;

// Creating a POST route to create a file.
app.post("/files", (request, response) => {
  fs.writeFile(`./files/${date}-${time}.txt`, data, (err) => {
    // Checking for any errors.
    if (err) {
      response.send("Error while creating file", err);
    } else {
      response.send("File created successfully");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
