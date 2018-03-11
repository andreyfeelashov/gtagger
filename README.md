# gtagger

An importable Global Site Tag wrapper for Google website tracking. Allows bundling [gtag.js code snippet](https://developers.google.com/gtagjs/devguide/snippet) alongside other modules.

## Usage

Install with npm:

```shell
npm install gtagger --save
```

Initialize using a specific tracking ID:

```javascript
import { Gtagger } from 'gtagger';

Gtagger.initialize(trackingId);
```

Run commands the same way you would with `gtag` directly:

```javascript
Gtagger.run(commandType, ...commandParameters);
```

*Note that calling `Gtagger.run` without initializing first will likely (and definitely should) fail.*

## Author

[Andrey Feelashov](https://andreyfeelashov.gitlab.io/)

## License

This project is licensed under the [MIT License](./LICENSE.md).
