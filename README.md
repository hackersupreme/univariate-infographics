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

### PieChart
```jsx
const Example = () => (
  <PieChart
    width={200}
    height={200}
    data={data}
    ...
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
