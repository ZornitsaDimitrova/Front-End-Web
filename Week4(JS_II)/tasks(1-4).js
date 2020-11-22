//1
var person = {
    _salary: 1000,
    getSecretSalaryInfo: function (){
        return this._salary;
    }
};
var stoleSalaryInfo = person.getSecretSalaryInfo.bind(person);

console.log(person.getSecretSalaryInfo()); 
console.log(stoleSalaryInfo()); 

//2
class Person {
    constructor(name) {    
      this.name = name;
      this.planet = "Земя"
    }
      greeting(){
          console.log(`Здравей ${this.name} от планетата ${this.planet}`);
      }
  }

let person1 = new Person("Стефан");
let person2 = new Person("Гергана");
let person3 = new Person("Алекс");
person1.greeting();
person2.greeting();
person3.greeting();

//3
function Item(name, discount){
    this.name = name;
    this.discount = discount;
    var price = 1000;
    this.getPrice = function() {
        return price;
    }
    this.calculateDiscount = function(){
        return price - price * (discount / 100);
    }
}

let computer = new Item("Computer",5);
console.log(computer.calculateDiscount());

//4
function person(){
    var _salary = 1000;
    this.getSecretSalaryInfo = function(){
        return _salary;
    }
}

let p = new person();
p.getSecretSalaryInfo();
