import React, { useState } from 'react';
import { createPortions } from './createPortions.js';
import Styles from './verticalbar.module.css';
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

	const { 
		startY, 
		endY, 
		color, 
		highlightColor, 
		textPercentage, 
		id } = portion;

	return (
		<g
		onMouseEnter={() => setCurrent(portion.id)}
		onMouseLeave={() => setCurrent(-1)}
		>
			<rect x={0} y={startY} width={width} height={endY} fill={current === id ? highlightColor : color} />
			{ 
				overlay ? (
					<text 
						x={width / 2} 
						y={((endY - startY) / 2) + startY} 
						textAnchor="middle" 
						dominantBaseline="middle" 
						fill={overlayColor}
						style={{fontSize: '1em'}}>
							{portion[overlayDataType]}
					</text> ) : null
			}
		</g>
	)
}

const Legend = props => {

	const { portions, width, current, setCurrent, dataType } = props;

	return (
		<ul className={Styles.list} role="Legend" style={{maxWidth: `${width}px`}}>
			{
				portions.map((portion, i) => (
					<li className={Styles.listItem}
					onMouseEnter={() => setCurrent(portion.id)}
					onFocus={() => setCurrent(portion.id)}
					onMouseLeave={() => setCurrent(-1)}
					tabIndex="0"
					>
						<svg width={20} height={20}>
							<circle cx={10} cy={10} r={10} fill={current === portion.id ? portion.highlightColor : portion.color} />
						</svg>
						<label className={Styles.label}>
							{portion.label}
						</label>
						<data className={Styles.data}>
							{portion[dataType]}
						</data>
					</li>
				))
			}
		</ul>
	)
}

const VerticalBar = props => {

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

	const portions = createPortions( width, height, data, baseColor, highlightColor, gradientDirection );

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
						overlay={overlay}
						overlayDataType={overlayDataType}
						overlayColor={overlayColor}
						key={i} />
					))
				}
			</svg>
			{ title ? <h2 className={Styles.header} style={{maxWidth: width, color: titleColor}}>{title}</h2> : null }
			{
				legend ? <Legend 
					portions={portions} 
					width={width}
					current={current}
					setCurrent={setCurrent}
					dataType={legendDataType} /> : null
			}
		</figure>
	)
}

VerticalBar.defaultProps = Defaults;

export default VerticalBar;