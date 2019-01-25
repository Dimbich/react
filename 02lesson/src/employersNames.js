let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(names => names.length > 0 && names.length != '')
.map(name => name.toLowerCase().trim());  // без return он пустой массив мне выводит

//console.log(employersNames);

export {employersNames};