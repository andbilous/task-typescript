
export interface Fighters {
  readonly name:String;
  health:number;
  power:number;
  knockout();
  hit(Fighters,number);
}
 export class Fighter implements Fighters {
    name:String;
    health:number;
    power:number;

    constructor(name:String, health:number, power:number) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
    private setDamage (damage:number)
    {
      this.health -=damage;
      console.log(`Health is ${this.health}`);
    }

public hit(enemy:Fighter, point:number) {
      enemy.setDamage(point * this.power);
    }

    public knockout() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Time is over"));
        }, 500);
      });
  
      promise.then(
        result => console.log("Fulfilled: " + result)
      ).catch(error => console.log("Rejected: " + error.message));
      return promise;
    }
  }