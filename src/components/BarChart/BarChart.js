import React, { useState } from 'react';
import Styles from './barchart.module.css';
import { createBars } from './createBars.js';
import Defaults from '../../defaults.js';

const Bar = props => {

	const { 
		bar, 
		height, 
		width,
		barWidth, 
		current, 
		setCurrent, 
		legend,
		legendDataType,
		legendColor,
		overlay,
		overlayColor,
		overlayDataType } = props;

	const { x, y, id, highlightColor, color } = bar;

	return (
	<g>
		<line 
			x1={x} 
			y1={height} 
			x2={x} 
			y2={y} 
			stroke={current === id ? highlightColor : color} 
			strokeWidth={barWidth}
			onMouseEnter={() => setCurrent(id)}
			onMouseLeave={() => setCurrent(-1)} />
		{
			overlay ? (
			<text 
				x={x}
				y={y + ((height - y) / 2)}
				fill={overlayColor}
				textAnchor="middle"
				dominantBaseline="middle"
				className={Styles.labelXAxis} >
					{bar[overlayDataType]}
			</text> ) : null
		}
	</g>
)}


const Legend = props => {

	const { bars, width, legendColor, legendDataType } = props;

	return (
		<svg width={width} height={30}>
		{ 
			bars.map((bar, i) => {

			const { x } = bar;

			return (
				<text 
					x={x}
					y={15}
					fill={legendColor}
					textAnchor="middle"
					dominantBaseline="middle"
					className={Styles.labelXAxis} >
						{bar[legendDataType]}
				</text>
			)})
		}
		</svg>
	)
}


const BarChart = props => {
	const { 
		width, 
		height,
		data,  
		title, 
		titleColor,
		baseColor, 
		barWidth, 
		highlightColor,
		overlay,
		overlayDataType,
		overlayColor,
		legend,
		legendDataType,
		legendColor,
		gradientDirection, 
		className,
		style } = props;

	const bars = createBars(data, width, height, baseColor, highlightColor, gradientDirection);

	let [current, setCurrent] = useState(-1);

	return (
		<figure className={`${Styles.container} ` + `${className}`} style={style}>
			<svg width={width} height={height}>
				{
					bars.map((bar, i) => (
						<Bar 
						height={height} 
						width={width}
						bar={bar} 
						barWidth={barWidth}
						current={current}
						setCurrent={setCurrent}
						legend={legend}
						legendColor={legendColor}
						legendDataType={legendDataType} 
						overlay={overlay}
						overlayDataType={overlayDataType}
						overlayColor={overlayColor}
						/>
					))
				}
			</svg>
			{
				legend ? (
					<Legend
						width={width}
						bars={bars}
						legendColor={legendColor}
						legendDataType={legendDataType}
					/>
				) : null
			}
			{title ? <h2 className={Styles.label} style={{color: titleColor}}>{title}</h2> : null}
		</figure>
	)
}

BarChart.defaultProps = Defaults;

export default BarChart;