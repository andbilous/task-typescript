import  {Fighter} from "./fighter";

export class ImprovedFighter extends  Fighter {
 public constructor(name:String, health:number, power:number) {
    super(name, health, power);
  }
  protected doubleHit(enemy:any, point:number) {
    super.hit(enemy, point*2);
  }
}

