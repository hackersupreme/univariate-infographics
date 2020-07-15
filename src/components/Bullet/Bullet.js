import React from 'react';
import Styles from './bullet.module.css';
import Defaults from '../../defaults.js';

const Bullet = props => {
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
		overlayDataType,
		overlayColor,
		legend,
		legendColor,
		className,
		style } = props;
	const { max, value, relativeValue, unit } = data;

	const relativePercentage = (relativeValue / max);
	const valuePercentage = (value / max);

	data.valueWithUnit = value + ' ' + unit;

	return (
		<figure className={`${Styles.container} ` + `${className}`} style={style}>
			{title ? <h2 className={Styles.title}>{title}</h2> : null}
			<svg width={width} height={height}>
				<rect 
					x={0} 
					y={0} 
					width={width} 
					height={height - 25} 
					fill={outerBackgroundColor} />
				<rect 
					x={0} 
					y={0} 
					width={relativePercentage * width} 
					height={height - 25} 
					fill={innerBackgroundColor} />
				<line 
					x1={0} 
					y1={(height - 25) / 2} 
					x2={valuePercentage * width} 
					y2={(height - 25) / 2 } 
					strokeWidth={lineWidth}
					stroke={lineColor} />
				{
					overlay ? (
						<text 
							style={{fontSize: '12px'}} 
							x={valuePercentage * width + 8} 
							y={(height - 25) / 2} 
							dominantBaseline="middle" 
							textAnchor="start"
							fill={overlayColor}>
								{data[overlayDataType]}
						</text>
					) : null
				}
				{
					legend ? (
						<React.Fragment>
						<text 
							style={{fontSize: '12px'}} 
							x={0} 
							y={height - 5} 
							dominantBaseline="text-bottom" 
							textAnchor="left"
							fill={legendColor}>
								0
						</text>
						<text 
							style={{fontSize: '12px'}} 
							x={relativePercentage * width} 
							y={height - 5} 
							dominantBaseline="text-bottom" 
							textAnchor="middle"
							fill={legendColor}>
								{relativeValue}
						</text>
						<text 
							style={{fontSize: '12px'}} 
							x={width} 
							y={height - 5} 
							dominantBaseline="text-bottom" 
							textAnchor="end"
							fill={legendColor}>
								{max}
						</text>
						</React.Fragment>
					) : null
				}
			</svg>
		</figure>
	)
}

Bullet.defaultProps = Defaults;

export default Bullet;