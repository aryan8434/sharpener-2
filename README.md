# E-Commerce Product Admin

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML-5-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-blue?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-purple?logo=axios)](https://axios-http.com/)

A clean, responsive web-based product management application built for Sharpener.

## Features
- **Product Management**: Add new selling products with selling price and category.
- **Dynamic Calculation**: Automatic total value calculation across all listed products.
- **Cloud Synchronization**: Delete product functionality with cloud API synchronization via CrudCrud.

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- CrudCrud REST API

## Getting Started
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/aryan8434/sharpener-2.git
   ```
2. Update the `apiUrl` endpoint in `index.js` with your active CrudCrud API endpoint.
3. Open `index.html` in any modern web browser.

## Usage
- Enter product selling price, product name, and choose a category.
- Click **Add Product** to submit and save to the database.
- Click **Delete Product** on any listed item to remove it.

## Project Structure
- `index.html` - Application user interface structure
- `index.js` - Application logic and API integration
- `indx.css` - Styling and layout

## License
MIT License
