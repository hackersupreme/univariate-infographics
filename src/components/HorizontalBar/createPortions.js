import { getValuesFromData, sumValuesAccumulator, getColorRange } from '../../utilities.js';

export const createPortions = (width, height, data, baseColor, highlightColor, gradientDirection) => {
	const values = getValuesFromData(data);
	const sum = values.reduce(sumValuesAccumulator);

	let cumulativePercentage = 0;

	return data.map((item, i) => {

		const { value } = item;
		const rawPercentage = value / sum;

		const newItem = {
			...item,
			id: i,
			rawPercentage,
			cumulativePercentage,
			proportion: rawPercentage.toFixed(4),
			fixedPercentage: (rawPercentage.toFixed(4) * 100).toFixed(2),
			percentageWithSymbol: (rawPercentage.toFixed(4) * 100).toFixed(2) + '%',
			valueWithUnit: item.value + ' ' + item.unit,
			color: getColorRange(data.length, baseColor, gradientDirection)[i],
			highlightColor,
			startX: cumulativePercentage * width,
			endX: (cumulativePercentage + rawPercentage) * width + 1
		}

		cumulativePercentage += rawPercentage;

		return newItem
	})
}