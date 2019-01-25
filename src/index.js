"use strict";
import {employersNames} from './employersNames';
import { money, eu, rus } from './sponsors';
//console.log(employersNames);

class Make {
    constructor (owner, director, cash, emp) {
        this.owner = owner;
        this.director = director || 'Victor';
        this.cash = cash;
        this.emp = emp;
    }    
    cons() {
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash} . And our employers: ${this.emp}`);
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${eu[0]} . It's a huge risk.`);
    }
}

const make2 = new Make('Sam', null, money, employersNames);
make2.cons();
