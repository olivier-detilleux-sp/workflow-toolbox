# Utility Connector for SailPoint IdentityNow

This connector provides a collection of utility commands for use in SailPoint workflows, including:

- String encoding/decoding
- Base64 operations
- Date calculations
- Type conversions
- Math operations
- Encryption helpers

All commands are invoked via the SailPoint `invoke` endpoint using a payload like:

```json
{
  "type": "<command-name>",
  "input": { /* command-specific input */ },
  "config": {}
}
```

---

## 📌 Command Reference

---

### 🔤 `util:string:base64-encode`

Encodes a string to Base64.

**Payload:**
```json
{
  "type": "util:string:base64-encode",
  "input": {
    "text": "hello world"
  },
  "config": {}
}
```

**Response:**
```json
{
  "encoded": "aGVsbG8gd29ybGQ="
}
```

---

### 🔓 `util:string:base64-decode`

Decodes a Base64 string to plain text.

**Payload:**
```json
{
  "type": "util:string:base64-decode",
  "input": {
    "encoded": "aGVsbG8gd29ybGQ="
  },
  "config": {}
}
```

**Response:**
```json
{
  "text": "hello world"
}
```

---

### 🔢 `util:string:to-number`

Converts a string to an integer.

**Payload:**
```json
{
  "type": "util:string:to-number",
  "input": {
    "text": "42"
  },
  "config": {}
}
```

**Response:**
```json
{
  "number": 42
}
```

---

### ➗ `util:number:divide`

Divides `a` by `b`.

**Payload:**
```json
{
  "type": "util:number:divide",
  "input": {
    "a": 10,
    "b": 2
  },
  "config": {}
}
```

**Response:**
```json
{
  "result": 5
}
```

---

### 🗓️ `util:date:diff-from-now`

Returns the number of full days between the given date and the current date.

**Payload:**
```json
{
  "type": "util:date:diff-from-now",
  "input": {
    "date": "2024-05-01T00:00:00Z"
  },
  "config": {}
}
```

**Response:**
```json
{
  "days": 32
}
```

---

### 🧮 `util:array:join`

Concatenates elements of an array with a given delimiter.

**Payload:**
```json
{
  "type": "util:array:join",
  "input": {
    "items": ["apple", "banana", "cherry"],
    "delimiter": ", "
  },
  "config": {}
}
```

**Response:**
```json
{
  "result": "apple, banana, cherry"
}
```

---

### 📅 `util:date:to-iso8601`

Parses a date from a custom format and returns it in ISO 8601 format.

**Payload:**
```json
{
  "type": "util:date:to-iso8601",
  "input": {
    "date": "02/06/2025",
    "format": "dd/MM/yyyy"
  },
  "config": {}
}
```

**Response:**
```json
{
  "iso": "2025-06-02T00:00:00.000Z"
}
```

---

### 🔐 `util:string:encrypt`

Encrypts a string using a symmetric key (e.g., AES).

> ⚠️ You must ensure the key is securely stored and matches your implementation.

**Payload:**
```json
{
  "type": "util:string:encrypt",
  "input": {
    "text": "mySecretPassword",
    "key": "myEncryptionKey123"
  },
  "config": {}
}
```

**Response:**
```json
{
  "encrypted": "ENCRYPTED_VALUE_HERE"
}
```

---

## 🧪 Testing

To test a command via API or IdentityNow workflow step, use the `invoke` connector operation and pass the corresponding payload.

---

## 📂 Project Structure

Typical layout:

```
src/
  array/
    join.ts
  date/
    diffFromNow.ts
    toIso8601.ts
  number/
    divide.ts
  string/
    base64Encode.ts
    base64Decode.ts
    encrypt.ts
    toNumber.ts
index.ts
```

---

## 📞 Need Help?

Reach out in SailPoint Developer Community or raise an issue in this repo if you encounter problems with specific formats or use cases.