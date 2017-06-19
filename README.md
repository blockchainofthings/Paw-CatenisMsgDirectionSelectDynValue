# Catenis Message Direction Selection Paw Extension

This is a Dynamic Value Paw extension that is used to select the proper message direction for Catenis API requests.

## Use

This Dynamic Value should be added as the value of the 'direction' URL (query string) parameter for the List Messages Catenis API
request to correctly specify filtering criteria based on the direction of the message.

## Development

### Prerequisites

```shell
nvm install
nvm use
npm install
```

### Build

```shell
npm run build
```

### Install

```shell
make install
```

### Test

```shell
npm test
```

## License

This Paw Extension is released under the [MIT License](LICENSE). Feel free to fork, and modify!

Copyright © 2017 Blockchain of Things Inc.
