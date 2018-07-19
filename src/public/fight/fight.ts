import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

async function fight (fighter:Fighter, improvedFighter:ImprovedFighter, points:number) {
    for (let i = 0; i < 5; i++) {
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
        fighter.hit(improvedFighter, points);
        improvedFighter.hit(fighter,points);
    }
  }
  export default fight;
  