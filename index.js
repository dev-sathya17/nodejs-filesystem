// Importing required packages.
const express = require("express");
const fs = require("fs");
const path = require("path");

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
  // Creating a file in the directory.
  fs.writeFile(`./files/${date}-${time}.txt`, data, (err) => {
    // Checking for any errors.
    if (err) {
      response.send("Error while creating file", err);
    } else {
      response.send("File created successfully");
    }
  });
});

// Creating a GET route to read all the files present in the directory.
app.get("/files", (request, response) => {
  // Reading all the files in the directory using readdir in fs library.
  fs.readdir("./files", (err, files) => {
    // Checking for any errors.
    if (err) {
      response.send("Error while reading files", err);
    } else {
      // Creating an array to store text files only.
      const textFiles = [];
      //   Iterating through all files
      files.forEach((file) => {
        // Checking if the file is a text file based on its extension '.txt'.
        if (path.extname(file) === ".txt") {
          // Inserting it to our array.
          textFiles.push(file);
        }
      });

      // Sending all the text files present in the directory in response.
      response.send(textFiles);
    }
  });
});

// Creating a server to make it run on port 3000.
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
