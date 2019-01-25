"use strict";
let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {eu, rus, cash} = sponsors;

function calcCash(own = 0, cash) {
    return cash.reduce((sum, element) => { return sum + element} , own);   
}
let money = calcCash(null, cash);
export { money, eu, rus };