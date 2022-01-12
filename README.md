# aTools-js

> 现代 JavaScript 实用工具库🔧

介绍...

## 📦 install

```bash
# npm
npm install atools-js

# yarn
yarn add atools-js

# pnpm
pnpm add atools-js
```

-----

## 🔨 Usage

```js
import { getTypeOf } from 'atools-js'

getTypeOf('') // String
getTypeOf(0)  // Number
getTypeOf(true) // Boolean
getTypeOf(Symbol()) // Symbol
getTypeOf(null) // Null
getTypeOf(undefined)  // Undefined
getTypeOf({}) // Object
getTypeOf([]) // Array
getTypeOf(/\w+/)  // RegExp
getTypeOf(new Date()) // Date
getTypeOf(new Error())  // Error
getTypeOf(() => {}) // Function
getTypeOf(async () => {}) // AsyncFunction
getTypeOf(document) // HTMLDocument
```

-----

## 🔗 Links

[atools: 现代 JavaScript 实用工具库🔧](https://github.com/wangdaoo/atools)

-----

## ⌨️ Development

Or clone locally:

```bash
$ git clone git@github.com:wangdaoo/atools.git

$ cd atools

$ pnpm install
```

-----

## 🤝 Contributing

[Issues · atools](https://github.com/wangdaoo/atools/issues)

## Contact

![Contact](http://cdn.wangdaoo.com/qrcode2.jpeg?imageView2/1/w/400/h/400)
