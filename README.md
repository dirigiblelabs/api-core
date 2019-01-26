# API V3 - Core

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/api-v3-core.svg)](https://github.com/dirigiblelabs/api-v3-core/graphs/contributors)

## Overview

* [Console](http://www.dirigible.io/api/console.html) 
  - provides a **Console Object**, which is used to write messages to the default logging output with several log levels _**INFO, WARNING, ERROR, TRACE**_
* [Context](http://www.dirigible.io/api/context.html) 
  - provides a **Context Object**, which is used to store and manage properties for a single execution flow (with or without HTTP request)
* [Env](http://www.dirigible.io/api/env.html) 
  - provides a **Env Object**, which is used for access of the environment variables
* [Extensions](http://www.dirigible.io/api/extensions.html) 
  - provides a **Extension Object**, which is used for interaction with _**Extensions**_ and _**Extension Points**_
* [Globals](http://www.dirigible.io/api/globals.html) 
  - provides a **Globals Object**, which is used to store and manage properties in the global store
* [Java](http://www.dirigible.io/api/java.html) 
  - provides a **Java Object**, which is used for the interconnection between the Javascript engines and the underlying JVM
* [Threads](http://www.dirigible.io/api/threads.html) 
  - provides **Threads** management functionality via the Mozilla Rhino engine to the underlying JVM

## License

This project is copyrighted by [SAP SE](http://www.sap.com/) and is available under the [Eclipse Public License v 1.0](https://www.eclipse.org/legal/epl-v10.html). See [LICENSE](LICENSE) and [NOTICE.txt](NOTICE.txt) for further details.
