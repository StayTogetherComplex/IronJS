// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A1_T7;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: { DecimalDigits , DecimalDigits } evaluates as ...;
* @description: Execute /\d{2,4}/.exec("0a0\u0031\u003122b") and check results;
*/

__executed = /\d{2,4}/.exec("0a0\u0031\u003122b");

__expected = ["0112"];
__expected.index = 2;
__expected.input = "0a01122b";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /\\d{2,4}/.exec("0a0\\u0031\\u003122b"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /\\d{2,4}/.exec("0a0\\u0031\\u003122b"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /\\d{2,4}/.exec("0a0\\u0031\\u003122b"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /\\d{2,4}/.exec("0a0\\u0031\\u003122b"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}

