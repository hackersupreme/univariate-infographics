import { getValuesFromData, sumValuesAccumulator, turnValuesIntoPercentages, convertToHSL } from '../../utilities.js';

export const createBullets = (data, width, height, lineWidth, baseColor) => {
	const values = getValuesFromData(data);
	const sum = values.reduce(sumValuesAccumulator);
	const averageValue = sum / values.length;
	const max = values.reduce((a, b) => Math.max(a, b));
	const percentages = turnValuesIntoPercentages(values);
	const averagePercentage = 100 / values.length;

	return data.map((item, i) => {
		const { value } = item;
		const rawPercentage = percentages[i];

		return {
			...item,
			id: i,
			color: convertToHSL(baseColor),
			rawPercentage,
			proportion: rawPercentage.toFixed(4),
			fixedPercentage: (rawPercentage.toFixed(4) * 100).toFixed(2),
			percentageWithSymbol: (rawPercentage.toFixed(4) * 100).toFixed(2) + '%',
			valueWithUnit: item.value + ' ' + item.unit,
			averageValue,
			averageValueWithUnit: averageValue + ' ' + item.unit,
			averagePercentage,
			averagePercentageWithSymbol: averageValue + '%',
			max,
			avgPercentOfMax: (averageValue / max).toFixed(2),
			valPercentOfMax: (value / max).toFixed(2),
			height: height / data.length + 1
		}
	})

}