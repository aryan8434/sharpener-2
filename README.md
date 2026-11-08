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

## Architecture & Data Flow
The application follows a client-side single-page architecture with direct RESTful API communication:

```
+-------------------------------------------------------------+
|                        Browser DOM                          |
|  [Form Input] ---> [Add Event] ---> [Axios POST /products]  |
|         ^                                  |                |
|         |                                  v                |
|  [Total Price Update] <--- [Render List] <--- [Response Data] |
+-------------------------------------------------------------+
                              |
                              v
                  +-----------------------+
                  |  CrudCrud Cloud API   |
                  +-----------------------+
```

## API Endpoints & Data Model

The application interfaces with a CrudCrud endpoint supporting standard CRUD operations:

| Method | Endpoint | Description | Payload / Response |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | Retrieves all existing product records | Returns `Product[]` array |
| `POST` | `/products` | Creates a new product record | Body: `{ name: string, price: number }` |
| `DELETE` | `/products/:id` | Deletes the specified product by unique `_id` | Status `200 OK` on success |

### Product Object Schema
```json
{
  "_id": "64fe091c323f4003e83fa123",
  "name": "Wireless Mechanical Keyboard",
  "price": 2499
}
```

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- CrudCrud REST API

## Prerequisites
Before running this application locally, ensure you have:
- A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).
- A free API endpoint from [CrudCrud](https://crudcrud.com/) (valid for 24 hours).
- (Optional) [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or `npx live-server` for hot reloading.

## Getting Started
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/aryan8434/sharpener-2.git
   ```
2. Navigate into the project folder:
   ```bash
   cd sharpener-2
   ```
3. Update the `apiUrl` endpoint in `index.js` with your active CrudCrud API endpoint:
   ```javascript
   const apiUrl = "https://crudcrud.com/api/<your-unique-endpoint>/products";
   ```
4. Launch the application:
   - Double click `index.html` to open in browser, or
   - Right-click `index.html` in VS Code and select **Open with Live Server**.

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
