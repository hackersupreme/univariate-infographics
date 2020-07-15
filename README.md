# univariate-infographics

> React component library of SVG info-graphics for displaying uni-variate data

[![NPM](https://img.shields.io/npm/v/univariate-infographics.svg)](https://www.npmjs.com/package/univariate-infographics) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[npm package](https://github.com/hackersupreme/univariate-infographics)
<br />
[hackersupreme.com](http://hackersupreme.com)

## Install

```bash
npm install --save univariate-infographics
```

## How To Use Library

[Instructions for use](https://github.com/hackersupreme/univariate-infographics)

## Components

- `<PieChart data={data} />`
- `<PieSlice data={data} />`
- `<BarChart data={data} />`
- `<HorizontalBar data={data} />`
- `<VerticalBar data={data} />`

![All Components](/screenshots/AllComponents.PNG)

## Documentation

The component library resides in the `src` folder while an example react app resides in the `example` folder. The example react app is a very simple app component that displays all the library components in a column.

The library in the `src` folder has the following folder structure:

```
src
  - index.js
  - defaults.js
  - utilities.js
  - components
    - BarChart
      - BarChart.js
      - createBars.js
      - barchart.module.css
    - HorizontalBar
      - HorizontalBar.js
      - createBars.js
      - horizontalbar.module.css
    - PieChart
      - PieChart.js
      - createSlices.js
      - piechart.module.css
    - PieSlice
      - PieSlice.js
      - createSlice.js
      - pieslice.module.css
    - VerticalBar
      - VerticalBar.js
      - createBars.js
      - verticalbar.module.css
  
```



## License

MIT © [hackersupreme](https://github.com/hackersupreme)
