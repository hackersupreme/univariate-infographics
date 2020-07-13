# univariate-infographics

> React component library of SVG info-graphics for displaying uni-variate data

[![NPM](https://img.shields.io/npm/v/univariate-infographics.svg)](https://www.npmjs.com/package/univariate-infographics) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save univariate-infographics
```

## Examples

- PieChart
- BarChart
- PieSlice
- HorizontalBar
- VerticalBar
- BulletChart

## Usage

```jsx
import React, { Component } from 'react'

import { PieChart, BarChart, PieSlice, HorizontalBar, VerticalBar, BulletChart } from 'univariate-infographics'

```

Each component takes in an array of objects called **data**. Each object must have a **value** property that represents the value of the item in the data set. You can also include other properties if you want to use them in a component's legend or as an overlay on the components.

```jsx

// this is all that's required for the components to work
const data = [
  {
    value: 1
  },
  {
    value: 2
  }
]

/*
=== BUT ===
*/

// you can also add more fields
const data = [
  {
    value: 3,
    label: 'Plot A',
    unit: 'acres',
    ...
  },
  {
    value: 5,
    label: 'Plot B',
    unit: 'acres',
    ...
  }
]
```

### PieChart
```jsx

const data = [
  {
    value: 1,
    ...
  },
  {
    value: 2,
    ...
  }
]

const Example = () => (
  <PieChart
    data={data}
  />
)
```

#### Props

Property | Type | Default | Description
-------- | ---- | ------- | -----------
data **(required)** | array | - | Data to be represented by component
width | int | 200 | Pixel width of component
height | int | 200 | Pixel height of component
baseColor | string | '#4095bf' | Starting color for component's gradient. Accepts rgb, hsl, and hex color formats
title | string | null | Title of component
titleColor | string | '#1d3940' | Text color of title. Accepts any color format
highlightColor | string | '#884ca1' | Hover color of component. Accepts any color format
donut | boolean | false | Turns the pie chart into a donut chart
donutColor | string | 'white' | Color of inner donut circle. Accepts any color format
legend | boolean | false | Includes a legend for the component.
legendColor | string | '#1d3940' | Text color of legend. Accepts any color format
legendDataType | string | 'value' | Selects the property of the objects in the data array to display as 

### BarChart
```jsx
const Example = () => (
  <BarChart
    width={200}
    height={200}
    data={data}
    ...
   />
)
```

### PieSlice
```jsx
const Example = () => (
  <PieSlice
    width={200}
    height={200}
    data={data}
    slice={0}
    ...
   />
)
```

### HorizontalBar
```jsx
const Example = () => (
  <HorizontalBar
    width={200}
    height={200}
    data={data}
    ...
   />
)
```

### VerticalBar
```jsx
const Example = () => (
  <VerticalBar
    width={200}
    height={200}
    data={data}
    ...
   />
)
```

### BulletChart
```jsx
const Example = () => (
  <BulletChart
    width={200}
    height={200}
    data={data}
    ...
   />
)
```

## License

MIT © [hackersupreme](https://github.com/hackersupreme)
