import React, { useState } from 'react';
import { buildSlice } from './buildSlice.js';
import Styles from './pieslice.module.css';
import Defaults from '../../defaults.js';

const Path = props => {
	const { slice } = props;
	return (
		<path 
		d={slice.path} 
		fill={slice.baseColor} 
		/>
	)
}

const Legend = props => {
	const { data, title, legendDataType, legendColor } = props;
	return (
		<React.Fragment>
		
		<ul className={Styles.list}>
			{data.map((item, i) => (
				<li 
				className={Styles.listItem}
				tabIndex="0"
				>
					<data className={Styles.data} style={{color: legendColor}}>{item[legendDataType]}</data>
				</li>
				)
			)}
		</ul>
		</React.Fragment>
	)
}

const PieSlice = props => {
	const { 
		width, 
		height, 
		data,
		baseColor, 
		title, 
		titleColor,  
		secondaryColor,
		donut,
		donutColor,
		legend,
		legendDataType,
		legendColor,
		slice,
		orientation,
		circleArea,
		className,
		style } = props;

	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(width, height) / 2;

	const slices = buildSlice(
		data,
		baseColor,
		radius, 
		centerX, 
		centerY,
		slice,
		orientation,
		circleArea );

	return (
		<figure className={`${Styles.container} ` + `${className}`} style={style}>
			<svg width={width} height={height} style={{transform: `rotate(${orientation * 360}deg)`}}>

				<circle 
				r={radius}
				cx={centerX}
				cy={centerY}
				fill={secondaryColor} />
				
				{slices.map((slice, i) => (
					<Path 
					slice={slice} 
					key={i} 
					 />
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
					<h2 className={Styles.label} style={{color: titleColor}}>{title}</h2>
					) : null
			}
			{
				legend ? (
					<Legend 
					data={slices} 
					title={title} 
					legendDataType={legendDataType}
					legendColor={legendColor}
					/>
					) : null
			}
		</figure>
	)
}

PieSlice.defaultProps = Defaults;

export default PieSlice;