const checkScreenResolution = require('./checkScreenResolution');

const robot = require('robotjs');

// Input from user
let site = '370';
let costSet = 'CURRENT';
let item = 'TEST';
let freezeUnfreeze = 'u';
let freightPercent = '2.5';
let overheadPercent = '80';
let changeStatusTo = 'AC1';

checkScreenResolution();
//
// # Determin if QAD application is open and add focus
// appIsOpenCheck()
//
// while True:
//     window = pyautogui.getWindow(appIsOpenCheck())
//     if window:
//         window.set_foreground()
//         break
//
// # Maximize app
// pyautogui.hotkey('alt', ' ', 'x')
// time.sleep(1)
//
// clearAppScreen.clearAppScreen()
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
