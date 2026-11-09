# Quality Assurance & Testing Guide

This document outlines the testing workflow and manual test plan for **E-Commerce Product Admin**.

---

## Test Suite Overview

| Category | Type | Tool |
| :--- | :--- | :--- |
| UI & Form Validation | Manual | Web Browser |
| API Communication | Integration | Axios / CrudCrud |
| Cross-Browser Compatibility | Compatibility | Chrome, Firefox, Edge, Safari |

---

## Manual Test Cases

### TC-01: Page Load & Initial Product Fetch
- **Precondition**: At least 1 product exists in the CrudCrud database.
- **Steps**:
  1. Open `index.html` in browser.
  2. Inspect the product list and total value display.
- **Expected Result**: Existing products are fetched via `GET /products` and rendered. Total value matches the sum of product prices.

---

### TC-02: Add Valid Product
- **Steps**:
  1. Enter "Mechanical Keyboard" in the Product Name field.
  2. Enter "1500" in the Product Price field.
  3. Click **Add Product**.
- **Expected Result**:
  - `POST` request sent with status `201`.
  - Item appears at the bottom of the product list with a **Delete Product** button.
  - Total Value automatically increments by 1500.
  - Form fields reset to empty.

---

### TC-03: Add Product with Empty Fields
- **Steps**:
  1. Leave Product Name empty.
  2. Click **Add Product**.
- **Expected Result**: HTML5 form validation triggers with "Please fill out this field" tooltip. No HTTP request sent.

---

### TC-04: Delete Product
- **Steps**:
  1. Click **Delete Product** on any item.
- **Expected Result**:
  - `DELETE` request sent to `/products/:id`.
  - On response, item is removed from the DOM.
  - Total Value updates immediately, decreasing by deleted item's price.

---

### TC-05: Expired API Endpoint Handling
- **Steps**:
  1. In `index.js`, replace endpoint with an invalid or expired URL.
  2. Refresh the page.
- **Expected Result**: Console outputs descriptive error (`AxiosError: Request failed with status code 404`). Total value displays `Rs 0`.
