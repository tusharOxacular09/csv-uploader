# CSV Upload and Data Display Web Application

This project is a web application built with Node.js, MongoDB, and EJS that allows users to upload CSV files, view their contents in a dynamic table, search and sort the data, and visualize selected columns using a charting library. The application includes pagination for large datasets and validates CSV files during upload.

## Features

- Upload CSV files and store them in MongoDB.
- Display the contents of uploaded CSV files in a dynamic table with column headers.
- Front-end search functionality to filter table rows based on a selected column.
- Sorting buttons for each column to sort data in ascending or descending order.
- Front-end and server-side validation to allow only CSV file uploads.
- Pagination for tables with more than 100 records.
- Data visualization using a charting library for selected columns.

## Project Structure

csv-upload-app/
├── controllers/
│ └── fileController.js
├── models/
│ └── fileModel.js
├── public/
│ ├── css/
│ │ └── styles.css
│ ├── js/
│ │ └── script.js
├── routes/
│ └── fileRoutes.js
├── views/
│ ├── pages/
│ │ └── index.ejs
│ ├── partials/
│ │ └── header.ejs
├── .gitignore
├── app.js
├── package.json
└── README.md

## Getting Started

### Prerequisites

- Node.js and npm installed. [Download Node.js](https://nodejs.org/)
- MongoDB installed and running locally. [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:
   git clone https://github.com/tusharOxacular09/csv-uploader
   cd csv-upload-app

2. Install the dependencies:
   npm install

3. Start MongoDB:
   mongod

4. Run the application:
   npm start

5. The server will start on port 8080. You can access the application at http://localhost:8080.

## Folders

controllers/: Contains the controller logic for handling file uploads and data processing.
models/: Contains the Mongoose model for the CSV file data.
public/: Contains static files such as CSS and JavaScript.
routes/: Contains route definitions for the application.
views/: Contains EJS templates for rendering the frontend.

## Usage

# Upload a CSV File

- Navigate to the home page and use the file upload form to upload a CSV file.

# View Uploaded Files

- A list of uploaded CSV files will be displayed.
- Select a file to view its contents in a table.

# Search and Sort

- Use the search box to filter rows based on a selected column.
- Click on the column headers to sort the data in ascending or descending order.

# Pagination

- The table will paginate data if it contains more than 100 records.

# Data Visualization

- Select a column to visualize its data using the integrated charting library.

## Extra Features

# CSV File Validation

- Both front-end and server-side validation ensure only CSV files can be uploaded.

# Contributing

- Contributions are welcome! Please fork the repository and create a pull request with your changes.

# License

- This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Express
- MongoDB
- Mongoose
- EJS
- Multer
