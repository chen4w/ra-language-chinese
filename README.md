# Chinese Messages for React-Admin

Chinese messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-chinese
```

## Usage

```js
import chineseMessages from 'ra-language-chinese';

const messages = {
    'cn': chineseMessages
};

<Admin locale="cn" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.