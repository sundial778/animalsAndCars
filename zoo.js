function Zoo(cityName) {
    this.cityName = cityName;
    this.crate = [];
}




Zoo.prototype = {
    constructor: Zoo,
    animalSoundOff: function() {
        var crateLength = this.crate.length;
        for (var i = 0; i < crateLength; i++); {
            if (this.crate[i].animalType === "Duck") {
                console.log("Quack");
            } else(console.log(this.crate[i].animalType + "'s cant quack!")); {


            }
        }
    }
};





function Animal(animalType) {
    this.animalType = animalType;

}


//the zoo got funding!
var CinciZoo = new Zoo("Cincinatti");

//animals are born
var Animala = new Animal("Duck");
var Animalb = new Animal("Duck");
var Animalc = new Animal("Duck");
var Animald = new Animal("Duck");
var Animale = new Animal("Duck");
var Animalf = new Animal("Monkey");

//add them to the zoo
CinciZoo.crate.push(Animala);
CinciZoo.crate.push(Animalb);
CinciZoo.crate.push(Animalc);
CinciZoo.crate.push(Animald);
CinciZoo.crate.push(Animale);
CinciZoo.crate.push(Animalf);




