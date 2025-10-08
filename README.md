# Vocabulary Trainer

A simple web app for learning vocabulary from CSV files or Google Sheets. Click through word definitions, examples, and other info at your own pace.

## What it does

- Upload CSV files with your vocabulary
- Import directly from Google Sheets
- Words are automatically shuffled for better learning
- Navigate through each word's information step by step
- Mark words to review later
- Works on desktop and mobile

## Getting started

You'll need Node.js installed on your computer.

1. Download or clone this project
2. Open terminal in the project folder
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the app
5. Open localhost in your browser

## Setting up your vocabulary

### CSV files

Your CSV should have headers in the first row. Each row after that is one vocabulary item.

Example:

```csv
Word,Definition,Example,Translation
Apple,A round fruit,I eat an apple daily,Elma
Book,Collection of pages,She reads a book,Kitap
```

### Google Sheets

1. Create a Google Sheet with your vocabulary
2. Make it public (Anyone with link can view)
3. Copy the URL and paste it in the app

## How to use

1. Either upload a CSV file or paste a Google Sheets URL
2. Click "Next" to start learning
3. Use "Next" and "Back" to move through the information
4. Click "Revisit" to mark words you want to see again
5. Marked words will be added to the end of your list

## Project files

- `main.js` - Main app logic and event handling
- `state.js` - Keeps track of current position and data
- `moveNext.js` / `moveBack.js` - Navigation between words
- `onLoad.js` - Handles loading CSV/URL data
- `revisit.js` - Manages the revisit word list
- `presenter.js` - Updates what you see on screen
- `utils.js` - Helper functions (shuffle, parse CSV, etc.)
- `domElements.js` - References to HTML elements
- `style.css` - Style stuff

## Built with

- Vanilla JavaScript
- CSS for styling
- Papa Parse library for reading CSV files
- Vite for development and building

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

Feel free to fork this project and submit pull requests.

## Issues

If you find bugs or have suggestions, please create an issue on GitHub.

## License

ISC License
