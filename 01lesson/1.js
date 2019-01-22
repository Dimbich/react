const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
/*var employersNames = [];
for (var i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}*/
let employersNames = employers.filter((names) => {
    return names.length > 0 && names.length != ''
});
/*for (var i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}*/
employersNames = employersNames.map((name) => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

/*function calcCash(own) {
    own = own || 0;
    var everyCash = Array.prototype.slice.call(arguments);
    var total = own;
    for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}*/

function calcCash(own = 0) {
    let everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let m of everyCash[1]) {
        total += +m;        
    }
    return total;
}

const money = calcCash(null, sponsors.cash);  // зачем тут передаются 2 параметра и первый null есл принимает функция 1 параметр? принимает массив?

/*function makeBusiness(owner, director, cash, emp) {
    director = director || 'Victor';
    var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);*/

function makeBusiness({owner, director = 'Victor', cash, emp}) {
    const {eu : {SRL}, rus} = sponsors;
    console.log(rus);
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} . And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${eu[0]} It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);