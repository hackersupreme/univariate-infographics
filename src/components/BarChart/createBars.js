import { getValuesFromData, getColorRange, sumValuesAccumulator } from '../../utilities.js';

export const createBars = (data, width, height, baseColor, highlightColor, gradientDirection) => {

	const values = getValuesFromData(data);

	let bars = [];
	let currentXpos = 0;
	let legendGutter = 100;
	const xStep = (width ) / (data.length + 1);
	const maxY = Math.max( ...values );
	const sum = values.reduce(sumValuesAccumulator);

	return data.map((item, i) => {

		const { value } = item;
		const rawPercentage = value / sum;

		let bar = {
			...item,
			id: i,
			rawPercentage,
			proportion: rawPercentage.toFixed(4),
			fixedPercentage: (rawPercentage.toFixed(4) * 100).toFixed(2),
			percentageWithSymbol: (rawPercentage.toFixed(4) * 100).toFixed(2) + '%',
			valueWithUnit: item.value + ' ' + item.unit,
			color: getColorRange(data.length, baseColor, gradientDirection)[i],
			highlightColor,
			x: currentXpos + xStep,
			y: (height - 30) - ( value / maxY ) * (height - 30)
		}

		currentXpos += xStep;

		return bar;

	})
}