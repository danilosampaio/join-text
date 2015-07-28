'use strict';
var assert = require('assert');
var joinText = require('../');
var path = require('path');
var fs = require('fs');

describe('join text', function (){
	it('should join text', function (done) {
		var testName = 'asdfg';
		var expected = joinText('1Hu2mGD BRHarx ACfEzuObBpEW\nsQ JJv3g56Vq CeVkFixBO Pq dut\nSnKtPuS8vLomXYW ePy8AXF1Mch DWHyb', 'gca5 HmufXYPHd GCQ7cOltrpobbYOd\nx5lZxlTV2u6Bg0OlE Ox5S Xq LBhoXxJPRdClHH2ho', {paddingLeft: 1, paddingRight: 1});

		fs.readFile(getFixturePath(testName), function (err, data) {
	    assert.ifError(err);
	    assert.equal(data.toString(), expected);
	    done();
	  });
	});

	it('should join text with separator', function (done) {
		var testName = 'bvcxz';
		var expected = joinText('FPc3CqLuNK  grPqgSJg nbnKBYbf llLGnOygVYS\n\n2TjYqDI5L7B aYZWM77bgu JqBeswAPQ4 UCdalBHDBc0K\nPIbxFLPVXg', 'pIFwYbNrbhda5v fS2Fnjupj7YIrvh2G1 v0xlZX8OnCh\nHeRpR3V\nx\nx mDPTOcKXTLs z 6 q kkmpY0npP\nnfVbrfJIopNslQ0pbDczL11fvgEQM', {paddingLeft: 1, paddingRight: 1, separator: '|'});

		fs.readFile(getFixturePath(testName), function (err, data) {
	    assert.ifError(err);
	    assert.equal(data.toString(), expected);
	    done();
	  });
	});

	it('should join text which have different number of lines', function (done) {
		var testName = 'gfdsa';
		var expected = joinText('FPc3CqLuNK  grPqgSJg nbnKBYbf llLGnOygVYS\n\n2TjYqDI5L7B aYZWM77bgu JqBeswAPQ4 UCdalBHDBc0K\nPIbxFLPVXg', 'pIFwYbNrbhda5v fS2Fnjupj7YIrvh2G1 v0xlZX8OnCh\nHeRpR3V\nx\nx mDPTOcKXTLs z 6 q kkmpY0npP\nnfVbrfJIopNslQ0pbDczL11fvgEQM', {paddingLeft: 1, paddingRight: 1});

		fs.readFile(getFixturePath(testName), function (err, data) {
	    assert.ifError(err);
	    assert.equal(data.toString(), expected);
	    done();
	  });
	});

	it('should join simple text', function (done) {
		var testName = 'qwert';
		var expected = joinText('1Hu2mGD\nsQ JJv3g56Vq\nSnKtPuS8vLomXYW', 'GCQ7cOltrpobbYOd\nCeVkFixBO Pq dut\nePy8AXF1Mch', {paddingLeft: 1, paddingRight: 1});

		fs.readFile(getFixturePath(testName), function (err, data) {
	    assert.ifError(err);
	    assert.equal(data.toString(), expected);
	    done();
	  });
	});

	it('should join text with bottom align option', function (done) {
		var testName = 'trewq';
		var expected = joinText('1Hu2mGD BRHarx ACfEzuObBpEW\nsQ JJv3g56Vq CeVkFixBO Pq dut\nSnKtPuS8vLomXYW ePy8AXF1Mch DWHyb', '\ngca5 HmufXYPHd GCQ7cOltrpobbYOd\nx5lZxlTV2u6Bg0OlE Ox5S Xq LBhoXxJPRdClHH2ho', {paddingLeft: 1, paddingRight: 1, valign: 'bottom'});

		fs.readFile(getFixturePath(testName), function (err, data) {
	    assert.ifError(err);
	    assert.equal(data.toString(), expected);
	    done();
	  });
	});

	it('should join text with voffset option', function (done) {
		var testName = 'zxcvb';
		var expected = joinText('FPc3CqLuNK  grPqgSJg nbnKBYbf\n2TjYqDI5L7B aYZWM77bgu JqBesw\nPIbxFLPVXg', 'pIFwYbNrbhda5v\nHeRpR3V\nx\nx mDPTOcKXTLs\nnfVbrfJIopNslQ', {voffset: 1});

		fs.readFile(getFixturePath(testName), function (err, data) {
	    assert.ifError(err);
	    assert.equal(data.toString(), expected);
	    done();
	  });
	});
});

function getFixturePath(testName) {
  return path.join(__dirname, 'fixture', testName + '.txt');
}
