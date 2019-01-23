let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(names => names.length > 0 && names.length != '')
.map(name => name.toLowerCase().trim());  // без return он пустой массив мне выводит

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

function makeBusiness(owner, director = 'Victor', cash, emp) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} . And our employers: ${emp}`);
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];   //sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]} . It's a huge risk.`);
}
makeBusiness(...['Sam', , money, employersNames]);