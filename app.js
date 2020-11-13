
const button = document.getElementById("btn");

//JSON with dino data
const dinosaurs = {
    "Dinos": [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
};


// Create Dino Constructor
function Dino(name, weight, height, diet, location, time, fact) {
    this.species = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = location;
    this.when = time;
    this.fact = fact;
    this.image = "images/" + this.species.toLowerCase() + ".png";
}


//converting JSON into JS Object
//map() is generating array with the objects
const dinoObject = dinosaurs.Dinos
    .map(dino => new Dino(
        dino.species, 
        dino.weight, 
        dino.height, 
        dino.diet,
        dino.where,
        dino.when,
        dino.fact,
        dino.image)
    );    

console.log(dinoObject);

// Create Human Object
function Human(name, height, weight, diet) {
    this.species = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.image = "images/human.png"
    this.fact = "Did you know that the humans are 300.000 years old?"
}


//Use IIFE to get human data from form
//To make human available outside the IIFE, return it and assign it to a global variable:
let human = (function createHumanObject(){
    let name = document.getElementById("name").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    const diet = document.getElementById("diet").value;

    //Creating and returning a human object
    return new Human(name, weight, height, diet);
})();

console.log(human);

//Add human to the middle
dinoObject.splice(dinoObject.length / 2, 0, human);

//console.log(dinoObject[4]);


//Create Dino Compare Method 1 for height
compareHeight = (function(){
    let a1 = Math.floor(Math.random() * (8 - 0));
    if (a1 === 4) {
        return dinoObject[a1].fact = ` ${(dinoObject[a1].species)} you are unique like a dinosaur!`;
    }else {
        if (dinoObject[a1].height > dinoObject[4].height) {
            return dinoObject[a1].fact = ` ${dinoObject[a1].species} was ${(dinoObject[a1].height - dinoObject[4].height).toFixed(2)} cm taller than you`;
        } else {
            return dinoObject[a1].fact = `${dinoObject[a1].species} was ${(dinoObject[4].height - dinoObject[a1].height).toFixed(2)} cm shorter than you`;
        }
    }
})();

console.log(compareHeight);

// Create Dino Compare Method 2 for weight
compareWeight = (function cWeight(){
    let a1 = Math.floor(Math.random() * (8 - 0));
    if (a1 === 4) {
        return dinoObject[a1].fact = ` ${(dinoObject[a1].species)} you are unique like a dinosaur!`;
    }else {
        if (dinoObject[a1].weight > dinoObject[4].weight) {
            return dinoObject[a1].fact = ` ${dinoObject[a1].species} was ${(dinoObject[a1].weight - dinoObject[4].weight).toFixed(2)} bigger kg than you`;
        } else {
            return dinoObject[a1].fact = `${dinoObject[a1].species} was ${(dinoObject[4].weight - dinoObject[a1].weight).toFixed(2)} fitter kg than you`;
        }
    }
})();

console.log(compareWeight);

// Create Dino Compare Method 3 for diet
compareDiet = (function(){
    let a1 = Math.floor(Math.random() * (8 - 0));

    if (a1 === 4) {
        return dinoObject[a1].fact = ` ${(dinoObject[a1].species)} you are unique like a dinosaur!`;
    } else {
        if (dinoObject[a1].diet === dinoObject[4].diet) {
            return dinoObject[a1].fact = ` ${dinoObject[a1].species} was a ${dinoObject[a1].diet}, too! Like you. `;
        } else {
            return dinoObject[a1].fact = `${dinoObject[a1].species} was a ${dinoObject[a1].diet}. Not like you.`;
        }
    }
})();

console.log(compareDiet);

// Generate Tiles for each Dino in Array
function creatingTiles() {
    const grid = document.getElementById("grid");
    
        dinoObject.map((dino, index) => {
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
        
            let dinoFact = document.createElement("p");
            if (dino.species == "Pigeon") {
                dinoFact.innerHTML = dinoObject[8].fact;
            } else {
                dinoFact.innerHTML = (dino.fact) ? dino.fact: dino.fact;
            }
            gridItem.appendChild(dinoFact);
    })
};

console.log(dinoObject.length);

//For removing all items of the class grid-item by clicking the back button
function deletingTiles() {
    document.querySelectorAll(".grid-item").forEach(el => el.remove())
}

// On button click, prepare and display infographic
button.addEventListener('click', function() {
     creatingTiles();
    });


// Remove form from screen 
function hiding(){
    document.getElementById("dino-compare").style.display = "none";
};

function show_elements(){
    document.getElementById("grid-show").style.display = "grid"
};

