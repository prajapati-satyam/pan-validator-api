
```
# PAN Validator API

A simple API to validate the format of an Indian PAN (Permanent Account Number). This API checks if a provided PAN number follows the correct format but **does not verify the existence** of the PAN. It is useful for applications where PAN format validation is required.

## API Endpoints

### Base URL
- **https://pan-validator-api.vercel.app/**

### Endpoints
1. **GET `/`**  
   - Returns the `index.html` page with a basic description of the PAN Validator API.

2. **GET `/api/:panNumber`**  
   - Checks if the provided PAN number (`panNumber`) follows the correct format.
   - Example: `https://pan-validator-api.vercel.app/api/ABCDE1234F`

## PAN Format Validation

The API checks if the PAN number:
- Starts with five letters (case-insensitive).
- Follows with four digits.
- Ends with a single letter (case-insensitive).

**Note**: PAN numbers are typically in uppercase, and it’s recommended to submit them in uppercase for clarity. However, the API is case-insensitive, so lowercase letters will also be accepted and validated.

Example of a valid PAN format: **ABCDE1234F**

> **Note**: This API **does not verify** if a PAN number exists or belongs to a specific individual. It only checks if the PAN is in the valid format.

## API Response Example

The API returns a JSON response with a `pass` key indicating the result.

### Sample Response
- **Valid PAN**:
  ```json
  {
    "pass": true,
    "message": "Valid PAN format"
  }
  ```
- **Invalid PAN**:
  ```json
  {
    "pass": false,
    "message": "Invalid PAN format"
  }
  ```

## Usage Examples

### JavaScript Example

Here's an example of how to use this API to validate a PAN number format in JavaScript:

```javascript
async function pan() {
    // Make a request to the API with the specified PAN number
    let response = await fetch('https://pan-validator-api.vercel.app/api/ABCDE1234F');
    
    // Parse the response JSON
    let data = await response.json();
    
    // Log whether the PAN number format is valid
    if (data.pass) {
        console.log("The PAN number format is valid.");
    } else {
        console.log("The PAN number format is invalid.");
    }
}

// Call the function to validate the PAN number
pan();
```

### Python Example

Here's an example of how to use this API to validate a PAN number format in Python:

```python
import requests

def validate_pan(pan_number):
    # Define the API endpoint with the specified PAN number
    url = f'https://pan-validator-api.vercel.app/api/{pan_number}'
    
    try:
        # Send a GET request to the API
        response = requests.get(url)
        response.raise_for_status()  # Check for HTTP errors

        # Parse the JSON response
        data = response.json()
        
        # Check and print if the PAN format is valid
        if data.get("pass"):
            print("The PAN number format is valid.")
        else:
            print("The PAN number format is invalid.")
    except requests.exceptions.RequestException as e:
        print("An error occurred while validating the PAN number:", e)

# Example usage
validate_pan("ABCDE1234F")
```

In these examples:
- **JavaScript** and **Python** snippets demonstrate how to call the API and check if the PAN format is valid.
- **Output**: Both examples print whether the PAN format is valid or invalid based on the API’s response.

## Source Code

The source code is available on GitHub: [PAN Validator API Repository](https://github.com/prajapati-satyam/pan-validator-api).

---

Feel free to use this API in your projects to validate the format of PAN numbers entered by users.
```

This `README.md` provides clear instructions, code examples, and endpoint details for using the PAN Validator API in both JavaScript and Python.

contact me : satyamprajapati1979@gmail.com
