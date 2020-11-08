const ArrayDinosaur = [];
const button = document.getElementById("btn");

function Species(){
    this.species = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
  
}

// Create Dino Constructor
function Dino(name, weight, height, diet, location, time, fact) {
    this.where = location;
    this.when = time;
    this.fact = fact;
    this.image = "images/" + name.toLowerCase() + ".png";
}

//inheritance
Object.assign(Dino, Species);


// Fetching the information from JSON
fetch('./dino.json')
  .then((response) => {
    return response.json()
  })
  // Create Dino Objects by the appendData function
  .then(function(data) {
      appendData(data);
  })
  .catch((err) => {
    // Error 
    console.log("Error - Data can't be found!")
  })

function appendData(data){
    //map() is generating arrays for the object 
    let dinos = data.map(dino => new Dino(
        dino.species, 
        dino.weight, 
        dino.height, 
        dino.fact,
        `My species is ${dino.species}.`, 
        `I belong to ${dino.where}.`, 
        `My when value is ${dino.when}.`)
    ) 
}

// Create Human Object
function Human(name, height, weight, diet) {
    this.image = "images/human.png";
}

//inheritance
Object.assign(Human, Species);


// Use IIFE to get human data from form
(function getHumanData(){
            button.addEventListener("click", (function()
        {
            let name = document.getElementById("name").value;
            let height = document.getElementById("height").value;
            let weight = document.getElementById("weight").value;
            const diet = document.getElementById("diet").value;

            //Creating and returning a human object
            return human = new Human(name, weight, height, diet);
        }))
})();

// Create Dino Compare Method 1 for height
Dino.prototype.compareHeight = function(humanHeight){
    let a1 = Math.floor(Math.random() * (9 - 0));

    if (this.height > humanHeight) {
        this.fact[this.a1] = `This dinosaur was ${(this.height - humanHeight).toFixed(2)} cm taller than you`;
    } else {
        this.fact[this.a1] = `This dinosaur was ${((humanHeight - this.height) / 12).toFixed(2)} ft shorter than you`;
    }
}

// Create Dino Compare Method 2
Dino.prototype.compareWeight = function(humanWeight){
    let a2 = Math.floor(Math.random() * (9 - 0));

    if (this.height > humanWeight) {
        this.fact[this.a2] = `This dinosaur was ${(this.weight - humanWeight).toFixed(2)} kg bigger than you`;
    } else {
        this.fact[this.a2] = `This dinosaur was ${((humanWeight - this.weight) / 12).toFixed(2)} kg smaller than you`;
    }
}
    
// Create Dino Compare Method 3
Dino.prototype.compareDiet = function(humanDiet){
    let a3 = Math.floor(Math.random() * (9 - 0)) + 0;

    if (this.diet.toLowerCase() == humanDiet.toLowerCase()) {
        this.fact[this.a3] = `This dinosaur was also a ${this.diet}`;
    } else {
        this.fact[this.a3] = `Unlike you, this dinosaur was a ${this.diet}`;
    }
}

// Generate Tiles for each Dino in Array
function creatingTiles() {
    const grid = document.getElementById("grid");
    
        ArrayDinosaur.map((dino, index) => {
        let gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        grid.appendChild(gridItem);

        let dinoName = document.createElement("h3");
        dinoName.innerHTML = (dino.species) ? dino.species : dino.name;
        gridItem.appendChild(dinoName);

        let dinoImage = document.createElement("img");
        dinoImage.src = dino.image;
        dinoImage.alt = (dino.species) ? dino.species : dino.name;
        gridItem.appendChild(dinoImage);
        
        let factsArray = dino.fact;

        let dinoFact = document.createElement("p");
        if (dino.species == "Pigeon") {
            dinoFact.innerHTML = dino.fact[0];
        } else {
            dinoFact.innerHTML = (dino.fact) ? dino.fact[Math.floor(Math.random() * factsArray.length)] : " ";
        }
        
        gridItem.appendChild(dinoFact);
    })
};

// On button click, prepare and display infographic
button.addEventListener('click', function() {
    appendData(Human.human);
    ArrayDinosaur.map(dino => {
        if (dino.species) {
            dino.compareHeight(human.height);
            dino.compareWeight(human.weight);
            dino.compareDiet(human.diet);
        } else {
            console.log(Error)
        }
    });
    creatingTiles();
});

// Remove form from screen 
function hiding(){
    document.getElementById("dino-compare").style.display = "none";
};

function show_elements(){
    document.getElementById("grid-show").style.display = "grid";
    document.getElementById("btn-full").style.display = "grid";
};

function backToForm(){
    document.getElementById("dino-compare").style.display = "grid";
    document.getElementById("btn-full").style.display = "none";
    document.getElementById("grid-show").style.display = "none";
};