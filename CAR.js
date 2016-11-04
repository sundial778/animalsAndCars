

//Manufacturing plant for every type of car
function Car(owners, miles, color, convertable, model) {
    this.owners = owners;
    this.miles = miles;
    this.color = color;
    this.convertable = convertable;
    this.model = model;
}


Car.prototype = {
        constructor: Car,

        worthAlook: function() {

            if (this.owners < 2 && this.miles < 150000 && this.convertable) {
                console.log("Check out this " + this.model + " It has only " + +" miles and is convertable.")
            ;} else {
                console.log("Not that " + this.model + " because it isnt what I want")
            ;}
        }
}
    //strange cars
var carA = new Car(1, 144000, "red", false, "Mercedes Benz");
var carB = new Car(1, 3000, "orange", true, "Kia Sedona");
var carC = new Car(2, 54400, "red", false, "Lambo idkHowToSpellIt");
var carD = new Car(2, 144000, "blue", true, "Chevy Silverado");
var carE = new Car(5, 999999, "yellow", false, "Hoopty");
var carF = new Car(1, 77320, "red", true, "Dodge Challenger");
var carG = new Car(4, 1400, "red", false, "Lexus ES4");




