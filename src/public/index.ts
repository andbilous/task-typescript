import {Fighter} from './fight/fighter';
import {improvedFighter} from './fight/improvedFighter';
import fight from './fight/fight';

let fighter = new Fighter("Jack", 100, 100);
let improvedFighter = new ImprovedFighter("Robin", 150, 150);

var punches = [24,21,25,11];
fight(fighter, improvedFighter,...punches);

