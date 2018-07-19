import Fighter from "./fighter";

class ImprovedFighter extends Fighter {
  constructor(name:String, health:number, power:number) {
    super(name, health, power);
  }
  protected doubleHit(enemy:Fighter, point:number) {
    this.hit(enemy, point*2);
  }
}
export default ImprovedFighter;

