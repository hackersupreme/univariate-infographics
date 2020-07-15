import React, { useState } from 'react';
import { buildSlices } from './buildSlices.js';
import Defaults from '../../defaults.js';
import Styles from './piechart.module.css';

const Path = props => {
	const { slice, setCurrent, current } = props;
	return (
		<path 
		d={slice.path} 
		fill={current === slice.id && slice.highlightColor ? slice.highlightColor : slice.color} 
		onMouseEnter={() => setCurrent(slice.id)}
		onMouseLeave={() => setCurrent(-1)}
		/>
	)
}

const Legend = props => {
	const { 
		data, 
		current,
		setCurrent, 
		legendDataType,
		legendColor } = props;
	return (
		<React.Fragment>
		
		<ul className={Styles.list}>
			{data.map((item, i) => (
				<li 
				className={Styles.listItem}
				onMouseEnter={() => setCurrent(item.id)}
				onMouseLeave={() => setCurrent(-1)}
				onFocus={() => setCurrent(item.id)}
				tabIndex="0"
				>
					<svg width={20} height={20}>
						<circle 
						cx={10} 
						cy={10}
						r={10} 
						fill={current === item.id ? item.highlightColor : item.color} />
					</svg>
					<label className={Styles.label} style={{color: legendColor}}>{item.label}</label>
					<data className={Styles.data} style={{color: legendColor}}>{item[legendDataType]}</data>
				</li>
				)
			)}
		</ul>
		</React.Fragment>
	)
}

const PieChart = props => {

	const { 
		width, 
		height, 
		data,  
		baseColor, 
		title,
		titleColor,
		highlightColor, 
		donut,
		donutColor,
		legend,
		legendDataType,
		legendColor,
		orientation,
		circleArea,
		gradientDirection,
		className,
		style } = props;

	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(width, height) / 2;
	const [current, setCurrent] = useState(-1);

	const slices = buildSlices(
		data,
		baseColor, 
		highlightColor, 
		radius, 
		centerX, 
		centerY,
		circleArea,
		gradientDirection
		);

	return (
		<figure className={`${Styles.container} ` + `${className}`} style={{...style, width: `${width}px` }}>
			<svg width={width} height={height} style={{transform: `rotate(${orientation * 360}deg)`}} xmlns="http://www.w3.org/2000/svg" >
				
				{slices.map((slice, i) => (
					<Path 
					slice={slice} 
					key={i} 
					setCurrent={setCurrent} 
					current={current} />
				))}

				{donut ? (
					<circle 
					r={radius / 2} 
					cx={centerX} 
					cy={centerY} 
					fill={donutColor} />
					) : null
				}
			
			</svg>
			{
				title ? (
					<h2 className={Styles.header} style={{color: titleColor}}>{title}</h2>
					) : null
			}
			{
				legend ? (
					<Legend 
					data={slices}  
					current={current} 
					setCurrent={setCurrent}
					legendDataType={legendDataType}
					legendColor={legendColor} />
					) : null
			}
		</figure>
	)
}

PieChart.defaultProps = Defaults;

export default PieChart;