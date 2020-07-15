import React from 'react';
import Styles from './bulletchart.module.css';
import { createBullets } from './createBullets.js';
import Defaults from '../../defaults.js';

const Bullet = props => {

	const { 
		width, 
		bullet, 
		lineWidth, 
		overlay, 
		legendColor, 
		overlayColor,
		innerBackgroundColor,
		outerBackgroundColor } = props;
	const { 
		color, 
		average, 
		max, 
		yCoordinate, 
		sum, 
		height, 
		value, 
		label,
		avgPercentOfMax,
		valPercentOfMax } = bullet;

	return (
	<React.Fragment>

	<h2 className={Styles.subheader} style={{color: legendColor}}>{label}</h2>

	<svg width={width} height={height}>
		<rect 
			x={0} 
			y={0} 
			width={width} 
			height={height} 
			fill='#dee6e8' 
		/>
		<rect 
			x={0} 
			y={0} 
			width={width * avgPercentOfMax * 0.75} 
			height={height} 
			fill='#c8d1d4' />
		<line 
			x1={0} 
			y1={height / 2} 
			x2={width * valPercentOfMax * 0.75} 
			y2={height / 2} 
			strokeWidth={lineWidth}
			stroke={color} />
		<text 
			x={width * valPercentOfMax * 0.75 + 10} 
			y={height / 2} 
			textAnchor="left" 
			dominantBaseline="middle"
			fill={overlayColor}
			style={{fontSize: '0.75em'}}>{bullet[overlay]}</text>
	</svg>

	</React.Fragment>
)}

const BulletChart = props => {
	const { 
		width, 
		height,  
		data, 
		title,
		titleColor,
		lineColor, 
		lineWidth,
		innerBackgroundColor,
		outerBackgroundColor,
		overlay,
		overlayColor,
		average,
		averageType,
		legendColor,
		className,
		style } = props;

	const bullets = createBullets(data, width, height, lineWidth, lineColor);

	const bullet = bullets[0];

	return (
		<figure className={`${Styles.container} ` + `${className}`} style={style}>
				{
					bullets.map((bullet, i) => (
						<Bullet 
							height={height} 
							width={width} 
							bullet={bullet} 
							lineWidth={lineWidth} 
							overlay={overlay}
							overlayColor={overlayColor}
							legendColor={legendColor}
							innerBackgroundColor={innerBackgroundColor}
							outerBackgroundColor={outerBackgroundColor}
							key={i} 
						/>
					))
				}
				{title ? <h2 className={Styles.header} style={{color: titleColor}}>{title}</h2> : null}
				{
					average ? (
					<svg width={width} height={20} className={Styles.legend}>
						<text 
							x={0} 
							y={10} 
							dominantBaseline="middle" 
							fill={legendColor}
							style={{fontSize: '0.75em', textTransform: 'uppercase'}}>
								avg
						</text>
						<text 
							x={bullets[0].avgPercentOfMax * width * 0.75 } 
							y={10}
							dominantBaseline="middle" 
							textAnchor="middle"
							fill={legendColor} 
							style={{fontSize: '0.75em'}}>
								{bullet[averageType]}
						</text>
					</svg> ) : null
				}
		</figure>
	)
}

BulletChart.defaultProps = Defaults;

export default BulletChart;