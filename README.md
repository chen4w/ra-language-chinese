# Chinese Messages for React-Admin

Chinese messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-chinese
```

## Usage

```js
import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from 'ra-language-chinese';

const i18nProvider = polyglotI18nProvider(() => chineseMessages, 'ch');

const App = () => (
    <Admin i18nProvider={i18nProvider}>
        ...
    </Admin>
);
```

## Use reference
Please check the official website tutorial.[changing-the-default-locale](https://marmelab.com/react-admin/Translation.html#changing-the-default-locale)

## License

This translation is licensed under the MIT License.