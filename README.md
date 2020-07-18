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

**Overview**

The components all take in an array of objects called `data` as props. Each component has a funtion that this array is passed to along with other props the component recieves. The function makes a series of calculations and returns a new array of updated objects. The updated objects have new properties that will allow the component to build out individual sub-components of the svg. The updated array is mapped to the sub-components and the sub-components are placed within the svg.

The components also have a legend sub-component that gets displayed if the `legend` prop is defined.

## License

MIT © [hackersupreme](https://github.com/hackersupreme)
