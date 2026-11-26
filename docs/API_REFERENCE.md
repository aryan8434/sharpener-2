# API Reference Manual

Detailed documentation of all REST endpoints used in **E-Commerce Product Admin** via CrudCrud.

---

## Base URL
```text
https://crudcrud.com/api/<your-unique-token>/products
```

---

## Endpoints

### 1. Fetch All Products
Retrieves an array of all products currently stored.

- **HTTP Method**: `GET`
- **Route**: `/products`
- **Headers**:
  ```http
  Accept: application/json
  ```

#### cURL Example:
```bash
curl -X GET "https://crudcrud.com/api/<token>/products" \
  -H "Accept: application/json"
```

#### Response:
- **Status**: `200 OK`
- **Body**:
  ```json
  [
    {
      "_id": "67300c822e118c03e8c25141",
      "name": "Wireless Mouse",
      "price": 899
    },
    {
      "_id": "67300c822e118c03e8c25142",
      "name": "Mechanical Keyboard",
      "price": 2499
    }
  ]
  ```

---

### 2. Create a Product
Adds a new product record to the cloud database.

- **HTTP Method**: `POST`
- **Route**: `/products`
- **Headers**:
  ```http
  Content-Type: application/json
  ```
- **Body Parameters**:
  | Field | Type | Required | Description |
  | :--- | :--- | :--- | :--- |
  | `name` | string | Yes | The product display name |
  | `price` | number | Yes | Price of the item in Indian Rupees (INR) |

#### cURL Example:
```bash
curl -X POST "https://crudcrud.com/api/<token>/products" \
  -H "Content-Type: application/json" \
  -d '{"name": "Gaming Headset", "price": 1999}'
```

#### Response:
- **Status**: `201 Created`
- **Body**:
  ```json
  {
    "_id": "67300c822e118c03e8c25143",
    "name": "Gaming Headset",
    "price": 1999
  }
  ```

---

### 3. Delete a Product
Removes a product record by its unique `_id`.

- **HTTP Method**: `DELETE`
- **Route**: `/products/:id`

#### cURL Example:
```bash
curl -X DELETE "https://crudcrud.com/api/<token>/products/67300c822e118c03e8c25143"
```

#### Response:
- **Status**: `200 OK`

---

## Error Responses

When interacting with the CrudCrud API, the following HTTP error statuses may occur:

| Status Code | Meaning | Common Cause |
| :--- | :--- | :--- |
| `400 Bad Request` | Invalid request payload | Malformed JSON body or missing `Content-Type: application/json` header |
| `404 Not Found` | Endpoint or resource not found | Expired CrudCrud token (24-hour limit) or invalid product `_id` |
| `429 Too Many Requests` | Rate/quota limit exceeded | Exceeded the 100-request limit on a free CrudCrud endpoint |

---

## Rate Limits & Endpoint Lifecycle

- **Request Quota**: Free CrudCrud endpoints allow up to **100 requests** total per generated token.
- **Expiration**: Endpoints automatically expire **24 hours** after creation, after which all routes return `404 Not Found`.
- **Payload Size**: Keep product `name` concise and `price` as a valid numeric value.
