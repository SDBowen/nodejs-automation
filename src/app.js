const robot = require('robotjs');
const checkScreenResolution = require('./checkScreenResolution');
const appIsOpenCheck = require('./appIsOpenCheck');
const clearAppScreen = require('./clearAppScreen');

// Input from user
let site = '370';
let costSet = 'CURRENT';
let item = 'TEST';
let freezeUnfreeze = 'u';
let freightPercent = '2.5';
let overheadPercent = '80';
let changeStatusTo = 'AC1';

checkScreenResolution();

appIsOpenCheck();

// Maximize app
robot.keyTap('space', 'alt');
robot.keyTap('x');
// Add a screen check here

clearAppScreen();

// itemCosting.freezeAndUnfreeze(site, costSet, item, freezeUnfreeze)
//
// itemCosting.costRollUp(site, costSet, item)
//
// itemCosting.elementCostCalc(item, costSet, freightPercent)
//
// itemCosting.overheadCostUpdate(item, costSet, overheadPercent)
//
// itemCosting.productStructureCostRollUp(site, costSet, item)
//
// itemCosting.itemDataMaint(item, changeStatusTo)
//
// itemCosting.completeCostRoll()
//
// if costSet == 'standard':
//     itemCosting.freezeAndUnfreeze(site, 'standard', item, 'f')
