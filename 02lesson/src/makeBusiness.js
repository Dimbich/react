class Makebusiness {
    constructor (owner, director = 'Victor', cash, emp) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }    
    cons() {
        console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} . And our employers: ${emp}`);
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];   //sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${eu[0]} . It's a huge risk.`);
    }
}

const Makebusiness = new Makebusiness (...['Sam', , money, employersNames]);
makebusiness.cons();