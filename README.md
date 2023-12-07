# wc-g2

> 2Kb library `Web Component` for [G2](https://g2.antv.antgroup.com/).

[![Build Status](https://github.com/hustcc/wc-g2/workflows/build/badge.svg)](https://github.com/hustcc/wc-g2/actions)
[![npm Version](https://img.shields.io/npm/v/wc-g2.svg)](https://www.npmjs.com/package/wc-g2)
[![npm Download](https://img.shields.io/npm/dm/wc-g2.svg)](https://www.npmjs.com/package/wc-g2)
[![npm License](https://img.shields.io/npm/l/wc-g2.svg)](https://www.npmjs.com/package/wc-g2)


## Usage

- Import the Web Component library.

```ts
import 'wc-g2';
```

- Use the component `wc-g2` with spec.

```html
<wc-g2 id="my-chart"></wc-g2>
```

Set the options of G2.

```js
const chart = document.getElementById('my-chart');

chart.options = {
  type: 'interval',
  data: [
    { genre: 'Sports', sold: 0 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ],
  encode: { x: 'genre', y: 'sold', color: 'genre' },
  style: { minHeight: 50 },
};
```

How to get the G2 options/spec? see [G2 Spec API](https://g2.antv.antgroup.com/manual/more/experimental-spec-api).

## License

MIT@[hustcc](https://github.com/hustcc).
