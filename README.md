# quoteMe

A simple asynchronous function to fetch quotes from a public API.

## Installation

You can install the `quoteMe` package using npm:

```npm install quote-me-library```

Or using Yarn:

yarn add quote-me-library

## Usage 

You can import and use the quoteMe function in your JavaScript or TypeScript project.

### Example


### Example in Markdown:

```javascript
import { quoteMe } from 'quote-me-library';

(async () => {
  try {
    const quote = await quoteMe();
    console.log(quote);
  } catch (error) {
    console.error(error);
  }
})();
