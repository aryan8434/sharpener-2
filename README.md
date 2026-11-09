# E-Commerce Product Admin

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML-5-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-blue?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-purple?logo=axios)](https://axios-http.com/)

A clean, responsive web-based product management application built for Sharpener.

---

## Table of Contents
- [Features](#features)
- [Architecture & Data Flow](#architecture--data-flow)
- [API Endpoints & Data Model](#api-endpoints--data-model)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Documentation & Guides](#documentation--guides)
- [Performance & Best Practices](#performance--best-practices)
- [Browser Compatibility](#browser-compatibility)
- [Roadmap & Upcoming Features](#roadmap--upcoming-features)
- [Troubleshooting & FAQ](#troubleshooting--faq)
- [Contributing](#contributing)
- [Project Structure](#project-structure)
- [License](#license)
- [Author & Acknowledgments](#author--acknowledgments)

---

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

For full request/response schemas and cURL examples, see [API Reference Manual](docs/API_REFERENCE.md).

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

## Documentation & Guides
Explore the dedicated guides for further information:
- 📖 [API Reference Manual](docs/API_REFERENCE.md) - Complete endpoints, schemas, and cURL commands.
- 🚀 [Deployment Guide](docs/DEPLOYMENT.md) - Hosting instructions for GitHub Pages, Vercel, and Netlify.
- 🧪 [Testing & QA Guide](docs/TESTING.md) - Manual test cases and verification procedures.
- 🔒 [Security Policy](docs/SECURITY.md) - Security guidelines and vulnerability reporting.
- 📜 [Changelog](docs/CHANGELOG.md) - Version release history and notable changes.

## Performance & Best Practices
- **Data Attributes (`data-price`)**: Keeps numeric item values directly on DOM elements for high-speed calculation without re-parsing text strings.
- **Asynchronous Execution**: Uses non-blocking Axios promise chains (`then` / `catch`) to prevent UI freezes during network requests.
- **Optimized DOM Appends**: Dynamically builds list nodes in memory before appending to minimise layout recalculations and reflows.

## Browser Compatibility

| Browser | Version Support | Status |
| :--- | :--- | :--- |
| Google Chrome | 80+ | Fully Supported |
| Mozilla Firefox | 75+ | Fully Supported |
| Microsoft Edge | 80+ | Fully Supported |
| Apple Safari | 13+ | Fully Supported |
| Mobile Browsers | iOS Safari / Chrome Android | Supported |

## Roadmap & Upcoming Features
- [ ] **Category Filtering**: View products separated into categories (Electronics, Food, Skincare).
- [ ] **Edit Product Details**: In-place editing modal with `PUT` / `PATCH` endpoint integration.
- [ ] **Offline Persistence**: Fallback to `localStorage` or `IndexedDB` when network connectivity drops.
- [ ] **Pagination & Search**: Filter and search through large inventories seamlessly.

## Troubleshooting & FAQ

### 1. Products are not loading or adding
- **Check CrudCrud Expiration**: Free CrudCrud endpoints expire after 24 hours or 100 requests. If expired, visit [CrudCrud](https://crudcrud.com/) to generate a new endpoint and update `apiUrl` in `index.js`.
- **Inspect Console Errors**: Press `F12` or `Ctrl+Shift+I` to open Developer Tools and view network logs under the Console / Network tab.

### 2. Total Value is showing `NaN` or incorrect sum
- Ensure the price entered is a valid positive number.
- Verify `parseFloat` or `Number()` parsing in `index.js` when reading element attributes.

## Contributing
Contributions are always welcome!
1. Fork the Project (`https://github.com/aryan8434/sharpener-2/fork`).
2. Create your Feature Branch (`git checkout -b feature/NewFeature`).
3. Commit your Changes (`git commit -m 'feat: add some NewFeature'`).
4. Push to the Branch (`git push origin feature/NewFeature`).
5. Open a Pull Request using our [PR Template](.github/PULL_REQUEST_TEMPLATE.md).

## Project Structure
- `index.html` - Application user interface structure
- `index.js` - Application logic and API integration
- `indx.css` - Styling and layout
- `docs/` - Project documentation and guides
- `.github/` - Community and contribution templates
- `LICENSE` - Open source MIT license

## License
Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Author & Acknowledgments
- **Aryan Kumar Raj** - [@aryan8434](https://github.com/aryan8434)
- Built as part of the Sharpener Web Development curriculum.
