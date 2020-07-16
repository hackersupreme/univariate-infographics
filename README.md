# univariate-infographics

> React component library of SVG info-graphics for displaying uni-variate data

[![NPM](https://img.shields.io/npm/v/univariate-infographics.svg)](https://www.npmjs.com/package/univariate-infographics) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[npm package](https://www.npmjs.com/package/univariate-infographics)
<br />
[hackersupreme.com](http://hackersupreme.com)

## Install

```bash
npm install --save univariate-infographics
```

## How To Use Library

[Instructions for use](https://www.npmjs.com/package/univariate-infographics)

## Components

This is a library of reusable react components that displays data as svg info-graphics. Here are the following components:

- `<PieChart data={data} />`
- `<PieSlice data={data} />`
- `<BarChart data={data} />`
- `<HorizontalBar data={data} />`
- `<VerticalBar data={data} />`

![All Components](/screenshots/AllComponents.PNG)

## Documentation

The component library resides in the `src` folder while an example react app that uses the library resides in the `example` folder. The example is a very simple app that displays all the components in a column.

Each component in the library only requires one attribute to work, the `data` prop. It takes in an array of objects that contains the data the component will render. The objects in the array must have a `value` property that contains a number. They can have any number of other properties as well.

```
const data = [
  {
    value: 1
  },
  {
    value: 2
  }
]

...

<PieChart data={data} />
```

Each component has a number of other props you can pass to it, including `width`, `height`, and `baseColor`. For full documentation on all the props available for each component and what they do, see the [npm page](https://www.npmjs.com/package/univariate-infographics) for the library.

All components have a corresponding function that will calculate the individual parts of a component. For example, the `PieChart` component uses a function called `buildSlices` to create the individual slices of the pie chart. The individual parts of a component are built by a sub component defined in the same files as the larger components. Those functions return an array of updated objects with all the information they need to be passed to a sub-component that renders 

## License

MIT © [hackersupreme](https://github.com/hackersupreme)
