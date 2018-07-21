 import * as Fighter from "./fighter";

export default async function fight (fighter:Fighter.Fighters, improvedFighter:Fighter.Fighters, points:number[]) {
    for (let i = 0; i < 8; i++) {
      if (fighter.health < 0) {
        console.log(fighter.name + " is in knockout");
        fighter.knockout();
        console.log("Winner is " + improvedFighter.name);
        break;
      }
      if (improvedFighter.health < 0) {
        console.log(improvedFighter);
        improvedFighter.knockout();
        console.log("Winner is " + fighter.name);
        break;
      } else
        fighter.hit(improvedFighter, points[i]);
        improvedFighter.hit(fighter,points[i]); 
    }
    return 0;
  }
