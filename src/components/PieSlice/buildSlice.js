import { getValuesFromData, turnValuesIntoPercentages, getCoordinatesForPercent, buildPath } from '../../utilities.js';

export const buildSlice = (data, baseColor, radius, centerX, centerY, slice, orientation, circleArea) => {
	const vals = getValuesFromData(data);
	const percentages = turnValuesIntoPercentages(vals);
	
	let cumulativePercentage = 0;
	let previousEndPoint = {x : centerX, y: centerY - radius};
	
	const item = data[slice];
	const rawPercentage = percentages[slice];
	const startX = getCoordinatesForPercent(0, radius, centerX, centerY, circleArea).x;
	const startY = getCoordinatesForPercent(0, radius, centerX, centerY, circleArea).y;
	const endX = getCoordinatesForPercent(rawPercentage, radius, centerX, centerY, circleArea).x;
	const endY = getCoordinatesForPercent(rawPercentage, radius, centerX, centerY, circleArea).y;
	
	return [{
			...item,
			rawPercentage,
			proportion: rawPercentage.toFixed(4),
			fixedPercentage: (rawPercentage.toFixed(4) * 100).toFixed(2),
			percentageWithSymbol: (rawPercentage.toFixed(4) * 100).toFixed(2) + '%',
			valueWithUnit: item.value + ' ' + item.unit,
			baseColor,
			startX,
			startY,
			endX,
			endY,
			path: buildPath(startX, startY, endX, endY, radius, centerX, centerY, rawPercentage)
	}]

}