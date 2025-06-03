# Workflow Toolbox for SailPoint Identity Security Cloud

This connector provides a collection of utility commands for use in SailPoint workflows, including:

-   String encoding/decoding
-   Base64 operations
-   Date calculations
-   Type conversions
-   Math operations
-   Encryption helpers

All commands are invoked via the SailPoint `invoke` endpoint using a payload like:

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "<command-name>",
    "input": {
        /* command-specific input */
    },
    "config": {}
}
```

---

## Command Reference

---

### `util:string:base64-encode`

Encodes a string to Base64.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "util:string:base64-encode",
    "input": {
        "value": "hello world"
    },
    "config": {}
}
```

**Response:**

```json
{
    "result": "aGVsbG8gd29ybGQ="
}
```

---

### `util:string:base64-decode`

Decodes a Base64 string to plain text.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "util:string:base64-decode",
    "input": {
        "value": "aGVsbG8gd29ybGQ="
    },
    "config": {}
}
```

**Response:**

```json
{
    "result": "hello world"
}
```

---

### `util:string:to-number`

Converts a string to an integer.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "util:string:to-number",
    "input": {
        "value": "42"
    },
    "config": {}
}
```

**Response:**

```json
{
    "result": 42
}
```

---

### `util:math:add`

Add `a` and `b`.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "util:math:add",
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
    "result": 12
}
```

---

### `util:math:substract`

Substract `b` from `a`.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "util:math:substract",
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
    "result": 8
}
```

---

### `util:math:multiply`

Multiply `a` by `b`.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "util:math:multiply",
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
    "result": 20
}
```

---

### `util:math:divide`

Divides `a` by `b`.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
    "type": "util:math:divide",
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

### `util:date:diff-from-now`

Returns the number of full days between the given date and the current date.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
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

### `util:array:join`

Concatenates elements of an array with a given delimiter.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
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

### `util:date:to-iso8601`

Parses a date from a custom format and returns it in ISO 8601 format.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
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
    "result": "2025-06-02T00:00:00.000Z"
}
```

---

### `util:string:encrypt`

Encrypts a string using a symmetric key (e.g., AES).

> ⚠️ You must ensure the key is securely stored and matches your implementation.

**Payload:**

```json
{
    "connectorRef": "<connector-id>",
    "tag": "latest",
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

## Testing

To test a command via API or Identity Security Cloud workflow step, use the `invoke` connector operation and pass the corresponding payload.

---

## Want to add your own command?

Simply add a new command to the util.ts file and register it in the index.ts file using the naming convention: util:<type>:<operation>

---

## Need Help?

Reach out in SailPoint Developer Community or raise an issue in this repo if you encounter problems with specific formats or use cases.
