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

## Usage

[See NPM Page for Instructions](https://www.npmjs.com/package/univariate-infographics)

## Components

This is a library of reusable react components that displays data as svg info-graphics. They can be displayed as just the graphic or include a title, legend, and/or overlay. This allows for the components to be used as graphs or as design elements.

Here are all the components in the library:

- `<PieChart data={data} />`
- `<PieSlice data={data} />`
- `<BarChart data={data} />`
- `<HorizontalBar data={data} />`
- `<VerticalBar data={data} />`

![All Components](/screenshots/AllComponents.PNG)

## Documentation

The component library resides in the `src` folder while an example react app that uses the library resides in the `example` folder. The example is a very simple app that displays all the components in a column.

Each component in the library only requires one attribute to work, the `data` prop. It takes in an array of objects that contains the data the component will render. The objects in the array must have a `value` property that contains a number. They can have any number of other properties as well. These other properties can be used in the legend and/or overlay of a component.

```
const data = [
  {
    value: 1
  },
  {
    value: 2
  }
]

// OR

const data = [
  {
    value: 1,
    label: 'A',
    unit: 'x',
    ...
  },
  {
    value: 2,
    label: 'B',
    unit: 'x',
    ...
  }
]

// BOTH WORK IN THE COMPONENT BELOW

...

<PieChart data={data} />
```

Each component has a number of other props you can pass to it, including `width`, `height`, and `baseColor`. For full documentation on all the props available for each component and what they do, see the [npm page](https://www.npmjs.com/package/univariate-infographics) for the library.

```jsx
<PieChart
  data={data}
  width={500}
  height={500}
  baseColor={'rgb(255,0,0)'}
/>
```

All components have a legend and a title while the `BarChart`, `HorizontalBar`, and `VerticalBar` have an overlay. To include the legend, title, and/or overlay with the component, pass `legend`, `title={"My Title"}`, and/or `overlay` to the component as props.

```jsx
<PieChart
  data={data}
  legend
/>

<HorizontalBar
  data={data}
  overlay
/>

<PieSlice
  data={data}
  title={"My Title"}
/>

<VerticalBar
  data={data}
  legend
  overlay
  title={"My Title"}
/>
```

You can configure the data type of the legend or overlay by using the `legendDataType` or `overlayDataType` props. The default for them is the `value` property of the objects in the `data` array. To change this, set the `legendDataType` or `overlayDataType` to a string that matches a different property you've defined in the `data` array.

```
const data = [
  {
    value: 1,
    label: 'A',
    unit: 'x'
  },
  {
    value: 2,
    label: 'B',
    unit: 'x'
  }
]

...

<BarChart
  data={data}
  legend
  legendDataType={'label'}
  overlay
  overlayDataType={'unit'}
/>
```


## License

MIT © [hackersupreme](https://github.com/hackersupreme)
