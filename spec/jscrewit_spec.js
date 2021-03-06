'use strict';

function listFeatures(label, features)
{
    if (features)
    {
        console.log(label + features.join(', '));
    }
}

var JScrewIt = require('../lib/jscrewit.js');
var TestSuite = require('./test_suite.js');
var fs = require('fs');

TestSuite.init(JScrewIt);
listFeatures('Available features: ', TestSuite.listFeatures(true));
listFeatures('Emulated features: ', TestSuite.listFeatures(false));
TestSuite.run();

var output = TestSuite.createOutput(['DEFAULT', 'COMPACT', 'NO_IE', 'FF31', 'IE11', 'NODE']);
fs.writeFile('output.txt', output);
