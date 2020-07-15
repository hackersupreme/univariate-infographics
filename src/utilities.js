export const getCoordinatesForPercent = (percent, radius, centerX, centerY, circleArea) => {
    const x = radius * Math.cos(2 * Math.PI * ((percent * circleArea) - 0.25)) + centerX;
    const y = radius * Math.sin(2 * Math.PI * ((percent * circleArea) + -0.25)) + centerY;
    return { x, y }
}

export const buildPath = (startX, startY, endX, endY, radius, centerX, centerY, percent) => {
    const largeArcFlag = percent > 0.5 ? 1 : 0;
    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} L ${centerX} ${centerY}`
}

export const getValuesFromData = data => {
    return data.map(item => item.value)
}

export const sumValuesAccumulator = (acc, current) => acc + current;

export const turnValuesIntoPercentages = values => {
    const sum = values.reduce(sumValuesAccumulator);
    const percentages = values.map((val) => val / sum);
    return percentages;
}

export const convertToHSL = color => {

    if (getColorType(color) === 'rgb') {
        color = RGBToHSL(color);
    } else if (getColorType(color) === 'hex') {
        color = hexToHSL(color);
    } else {
        color = color;
    }

    return color;
}

export const getColorRange = (length, startColor, gradientDirection) => {
	let color = '';

	if (getColorType(startColor) === 'rgb') {
		color = RGBToHSL(startColor);
	} else if (getColorType(startColor) === 'hex') {
		color = hexToHSL(startColor);
	} else {
		color = startColor;
	}

	let colorObj = createHSLObjFromString(color);
	let { hue, sat, light } = colorObj;

	const satStep = sat === 0 ? 0 : Math.floor((100 - sat) / length);
	const lightStep = Math.floor((100 - light) / (length * 3));
	const hueStep = 0;
	let colors = [];

	for (let i = 0; i < length; i++) {
		colors.push(createHSL(hue, sat, light));
		sat += satStep;
		light += lightStep;
		hue += hueStep;
	}
	
	if ( gradientDirection === 'reverse' ) {
		colors.reverse();
	}

	return colors;
}


const getColorType = color => {
	switch(color.charAt(0)) {
		case 'r':
			return 'rgb';
		case 'h':
			return 'hsl';
		case '#':
			return 'hex';
		default:
			return false;
	}
}

export const createHSL = (hue, sat, light) => {
	return `hsl(${hue}, ${sat}%, ${light}%)`
}

const createHSLObjFromString = hsl => {

	// trim out hsl( ... )
	let trimmedHSL = hsl.slice(4, hsl.length - 1);

	// split trimmed string into array
	let hslArray = trimmedHSL.split(',');

	// strip %
	hslArray[1] = hslArray[1].slice(0, hslArray[1].length - 1);
	hslArray[2] = hslArray[2].slice(0, hslArray[2].length - 1);

	return { 
		hue: parseInt(hslArray[0]), 
		sat: parseInt(hslArray[1]), 
		light: parseInt(hslArray[2]) }
}


const RGBToHSL = rgb => {
    let ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
    if (ex.test(rgb)) {
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);
        
        // convert %s to 0–255
        for (let R in rgb) {
            let r = rgb[R];
            if (r.indexOf("%") > -1)
                rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255);
        }

        // make r, g, and b fractions of 1
        let r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,

        // find greatest and smallest channel values
            cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // calculate hue
        // no difference
        if (delta == 0)
            h = 0;
        // red is max
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        // green is max
        else if (cmax == g)
            h = (b - r) / delta + 2;
        // blue is max
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // make negative hues positive behind 360°
        if (h < 0)
            h += 360;

        // calculate lightness
        l = (cmax + cmin) / 2;

        // calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        
        return "hsl(" + h + "," + s + "%," + l + "%)";

    } else {
        return false;
    }
}


const hexToHSL = H => {
    let ex = /^#([\da-f]{3}){1,2}$/i;
    if (ex.test(H)) {
        // convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
            r = "0x" + H[1] + H[1];
            g = "0x" + H[2] + H[2];
            b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
            r = "0x" + H[1] + H[2];
            g = "0x" + H[3] + H[4];
            b = "0x" + H[5] + H[6];
        }
        // then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0)
            h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0)
            h += 360;

        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        
        return "hsl(" + h + "," + s + "%," + l + "%)";

    } else {
        return "Invalid input color";
    }
}