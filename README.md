# anyplot

> Visual `Web Components` based on [G2](https://g2.antv.antgroup.com/).

[![Build Status](https://github.com/hustcc/anyplot/workflows/build/badge.svg)](https://github.com/hustcc/anyplot/actions)
[![npm Version](https://img.shields.io/npm/v/anyplot.svg)](https://www.npmjs.com/package/anyplot)
[![npm Download](https://img.shields.io/npm/dm/anyplot.svg)](https://www.npmjs.com/package/anyplot)
[![npm License](https://img.shields.io/npm/l/anyplot.svg)](https://www.npmjs.com/package/anyplot)


## Usage

- Import the Web Component library.

```ts
import 'anyplot';
```

- Use the component `AnyPlot` with spec.

```html
<any-plot style="height: 400px" spec=""></any-plot>
```

How to get the G2 spec? see [G2 Spec API](https://g2.antv.antgroup.com/manual/more/experimental-spec-api).

- Use it by Combining multiple components. [WIP]

```html
<chart style="height: 400px">
  <mark type="line" />
  <mark type="point" />
</chart>
```


## Web Components

- [any-plot]()
- [chart]()
- [mark]()
- [layer]()


## License

MIT@[hustcc](https://github.com/hustcc).
