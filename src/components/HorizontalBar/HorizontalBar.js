import React, { useState } from 'react';
import { createPortions } from './createPortions.js';
import Styles from './horizontalbar.module.css';
import Defaults from '../../defaults.js';

const Portion = props => {

	const { 
		portion, 
		width, 
		height, 
		current, 
		setCurrent, 
		overlay,
		overlayColor,
		overlayDataType } = props;

	const { startX, endX, color, highlightColor, id } = portion;

	return (
		<g
		onMouseEnter={() => setCurrent(portion.id)}
		onMouseLeave={() => setCurrent(-1)}
		>
			<rect 
				x={startX} 
				y={0} 
				width={endX}
				height={height} 
				fill={current === id ? highlightColor : color} />
			{
				overlay ? (
					<text 
						x={((endX - startX) / 2) + startX} 
						y={height / 2} 
						textAnchor="middle" 
						dominantBaseline="middle" 
						fill={overlayColor}
						style={{fontSize: '1em'}}>
							{portion[overlayDataType]}
					</text>
				) : null}
		</g>
	)
}

const Legend = props => {

	const { 
		portions, 
		width, 
		current, 
		setCurrent, 
		legendDataType } = props;

	return (
		<ul className={Styles.list} role="Legend" style={{maxWidth: `${width}px`}}>
			{
				portions.map((portion, i) => (
					<li 
					className={Styles.listItem}
					onMouseEnter={() => setCurrent(portion.id)}
					onFocus={() => setCurrent(portion.id)}
					onMouseLeave={() => setCurrent(-1)}
					tabIndex="0"
					>
						<svg width={20} height={20}>
							<circle cx={10} cy={10} r={10} fill={current === portion.id ? portion.highlightColor : portion.color} />
						</svg>
						<label className={Styles.label}>{portion.label}</label>
						<data className={Styles.data}>{portion[legendDataType]}</data>
					</li>
				))
			}
		</ul>
	)
}

const HorizontalBar = props => {

	const [current, setCurrent] = useState(-1);

	const { 
		width, 
		height, 
		data, 
		baseColor, 
		highlightColor, 
		title, 
		titleColor,
		overlay, 
		overlayDataType,
		overlayColor,
		legend,
		legendColor,
		legendDataType,
		gradientDirection,
		className,
		style } = props;

	const portions = createPortions( 
		width, 
		height, 
		data, 
		baseColor, 
		highlightColor,
		gradientDirection );

	return (
		<figure className={`${Styles.container} ` + `${className}`} style={style}>
			<svg width={width} height={height}>
				{
					portions.map((portion, i) => (
						<Portion 
						width={width} 
						height={height} 
						portion={portion}
						current={current}
						setCurrent={setCurrent} 
						key={i}
						overlay={overlay}
						overlayDataType={overlayDataType}
						overlayColor={overlayColor} />
					))
				}
			</svg>
			{
				title ? <h2 className={Styles.header} style={{color: titleColor}}>{title}</h2> : null
			}
			{
				legend ? <Legend 
					portions={portions} 
					width={width}
					current={current}
					setCurrent={setCurrent}
					legendDataType={legendDataType} /> : null
			}
		</figure>
	)
}

HorizontalBar.defaultProps = Defaults;

export default HorizontalBar;