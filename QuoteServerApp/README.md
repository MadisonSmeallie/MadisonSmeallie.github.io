# Quotes App

## Description:

This app generates a quote based on a specific category the user selects. Additionally, a user can add a quote to the library.

## How to install/run the project:
1. Clone repository to local machine.
2. You will need to install any non-core modules using npm. Run the command npm install <package-name> in the terminal within the directory to do so. 
3. This app requires you to intall express --> `npm install express`.
4. In terminal, type `node server.js` to start the server.
5. To stop the server, type ctrl+c in the terminal.
6. Access your page in the browser. Since the server is being hosted locally on your machine, use the URL localhost:8000/hello. 8000 is the port we specified in app.js.


## Description of available API endpoints:
1. `/quotebook/categories`
- returns all available quote categories in a structured format

2. `/quotebook/quote/:category` --> has three default categories already loaded: successQuotes, perseverenceQuotes, and happinessQuotes
- return a random quote from the specified category

3. `/quotebook/quote/new` --> endpoint should accept three parameters in the body of the request
- If valid, it adds the new quote to the appropriate category array in this format:
`{
	quote: "Some quote",
	author: "Some Author" 
}` <br> If successful, it will say so in plain text format. <br>
- If any required parameter is missing or if the category is not found in the predefined categories array, it responds with: `{ "error": "invalid or insufficient user input" }`

## Example Responses:
1. GET /quotebook/categories
- `[
  "successQuotes",
  "perseveranceQuotes",
  "happinessQuotes"
]`

2. GET /quotebook/quote/successQuotes
- `{
  "quote": "The way to get started is to quit talking and begin doing.",
  "author": "Walt Disney"
}`

3. POST /quotebook/quote/new
- `{
  "category": "successQuotes",
  "quote": "Believe you can and you're halfway there.",
  "author": "Theodore Roosevelt"
}`
- "Success!" <br>
Anything else will result in: 
- `{
  "error": "invalid or insufficient user input"
}`

## Set Up Requirements:
1. NodeJS - Express