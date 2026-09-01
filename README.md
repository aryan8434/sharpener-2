# E-Commerce Product Admin

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
