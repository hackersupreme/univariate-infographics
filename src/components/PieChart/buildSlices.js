import { getValuesFromData, turnValuesIntoPercentages, getCoordinatesForPercent, getColorRange, buildPath } from '../../utilities.js';

export const buildSlices = (data, baseColor, highlightColor, radius, centerX, centerY, circleArea, gradientDirection) => {
	const vals = getValuesFromData(data);
	const percentages = turnValuesIntoPercentages(vals);
	
	let cumulativePercentage = 0;
	let previousEndPoint = {x : centerX, y: centerY - radius};

	circleArea = circleArea ? circleArea : 1;

	return data.map((item, i) => {

		const startX = getCoordinatesForPercent(cumulativePercentage, radius, centerX, centerY, circleArea).x;
		const startY = getCoordinatesForPercent(cumulativePercentage, radius, centerX, centerY, circleArea).y;
		
		const rawPercentage = percentages[i];
		cumulativePercentage += rawPercentage;

		const endX = getCoordinatesForPercent(cumulativePercentage, radius, centerX, centerY, circleArea).x;
		const endY =  getCoordinatesForPercent(cumulativePercentage, radius, centerX, centerY, circleArea).y;
		
		previousEndPoint = { x: endX, y: endY };

		return {
			...item,
			id: i,
			color: getColorRange(data.length, baseColor, gradientDirection)[i],
			highlightColor,
			rawPercentage,
			cumulativePercentage,
			proportion: rawPercentage.toFixed(4),
			fixedPercentage: (rawPercentage.toFixed(4) * 100).toFixed(2),
			percentageWithSymbol: (rawPercentage.toFixed(4) * 100).toFixed(2) + '%',
			valueWithUnit: item.value + ' ' + item.unit,
			startX,
			startY,
			endX,
			endY,
			path: buildPath(startX, startY, endX, endY, radius, centerX, centerY, rawPercentage)
		}
	})
}
