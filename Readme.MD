# GUVI - DAY 37

## NodeJS File System Task.

### How to run the project on your machine:

1. Pull the repository to your local machine.

```
git pull
```

2. To install all the dependencies:

```
npm install
```

3. Once everything is installed successfully, now it's time to run the server.

```
npm run dev
```

### Dependencies used

1. express

```
npm install express
```

2. nodemon

```
npm install nodemon --save-dev
```

### About the Task.

1. The task is to create API routes such that it generates text files based on the current date and time.
2. We use express.js library in NodeJS to run a javascript application as a server.

### Setup.

1. We create a new project using the npm package manager in node.js.
2. We run the following command to create a new project.

```
    npm init
```

3. We specify the details required for initializing the project asked in the terminal.
4. We install the `express` library by using installation command from the npm package manager.
5. We create a javascript file named `index.js` which is the root of the project.
6. We add a package called as `nodemon` to help us automate the development process. It restarts the server every time it detects changes in the code.
7. We change the `package.json` file to include start and dev parameter to make the script run from the command `npm run dev`.

### Solution.

1. Initially, the modules required for the project are imported using the `require` method.
2. We create an express application.
3. Using this application object, we create a `GET` and a `POST` route.
4. We use the `POST` route to create the files and the `GET` route to read the files.
5. To perform file operation we use the file system library in node.js, `fs`
6. Creating Files:

   > - We use the date object to construct strings that depict the current date and time.
   > - When a `POST` call is made to the `/files` route, we use the `writeFile` method which accepts a filename, data to be written and a callback function with error as a parameter, as an arguement.
   > - The file name is constructed as `{current_date}-{current_time}.txt`
   > - We check for errors inside the callback function.
   > - If an error is encountered, we return a response with the error.
   > - Else, we return a success response and the file is created in a directory called as _files_.

7. Getting Files:
   > - When a `GET` call is made to the `/files` route, we use the `readdir` method which accepts a directory name and a callback function with error and the files data as its parameter, as an arguement.
   > - The files are iterated using the `forEach()` method.
   > - To pick the text files only, we use the path library.
   > - Each file is check for its extension using the path library, and if a text file is matched, it is added to an array.
   > - This array of text files is returned as a successful API call response.
