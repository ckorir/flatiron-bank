# Flatiron Bank
## _Bank management project_

The Bank Transactions Management project is a web application for managing bank transactions. This project allows users to view their recent bank transactions, add new transactions, and search for specific transactions. The application fetches transaction data from a local server running a JSON DB server.

## Features

- View a table of all recent bank transactions.
- Fill out and submit a form to add a new transaction (no persistence to the backend).
- Filter transactions by typing into the search bar. Only transactions with - descriptions matching the search term are displayed in the transactions table.

## Tech

The project is built using the following technologies:

- React
- JSON Server (as the local backend server)

## Project Setup

Start up the server using:

```sh
json-server --watch db.json
```

To run the project:

```sh
npm install
npm start
```

## License
MIT License

Copyright (c) 2023 ckorir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
