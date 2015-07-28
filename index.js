'use strict';
var stringLength = require('string-length');
var longestLine = require('longest-line');
var repeat = require('repeat-string');

module.exports = function (left, right, opts) {
	if (typeof left !== 'string' || typeof right !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};
	var valign = opts.valign || 'top';
	var voffset = opts.voffset || 0;
	var separator = opts.separator || '';
	var paddingLeft = opts.paddingLeft || 0;
	var paddingRight = opts.paddingRight || 0;

	var leftLines = left.split('\n');
	var rightLines = right.split('\n');
	var leftWidth = longestLine(left);
	var shorterText = null;
	var longestLength = null;
	var shorterLength = null;

	if (leftLines.length >= rightLines.length) {
		shorterText = rightLines;
		longestLength = leftLines.length;
		shorterLength = rightLines.length;
	} else {
		shorterText = leftLines;
		longestLength = rightLines.length;
		shorterLength = leftLines.length;
	}

	var emptyLines = longestLength - shorterLength - voffset;

	for (var i = 0; i < voffset; i++) {		
		addEmptyLine(shorterText, valign);
	};
	
	for (var i = 0; i < emptyLines; i++) {
		var position = valign === 'top' ? 'bottom' : 'top';
		addEmptyLine(shorterText, position);
	};

	return leftLines.reduce(function(text, line, index){
		text.push(padString(line, leftWidth) + repeat(' ', paddingLeft) + 
			separator + repeat(' ', paddingRight) + rightLines[index]);

		return text;
	}, []).join('\n');
};

function addEmptyLine(lines, position){
	if (position === 'top') {
		lines.unshift('');
	} else {
		lines.push('');
	}
}

function padString(line, length){
	return line + repeat(' ', length - stringLength(line) );
}
