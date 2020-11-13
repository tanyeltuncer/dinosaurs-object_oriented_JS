# Object Oriented Javascript 

## Student Instructions

### Big Picture

#### How it should look:
![grafik](https://user-images.githubusercontent.com/58187568/99046236-c37af400-2592-11eb-8ef0-d8fe41e8531e.png)

#### Description:
I will be building an infographic that is derived from data that is provided, as well as user input data. Object-oriented javascript is great for working with complex data, but it’s not of much use without an interface to interact with. I will be pulling in information from a form and using it to complete an array of objects that will then be appended back to the DOM. 

This may not sound like a lot, but there are a fair amount of moving pieces that rely on each other to work. I’ll need to plan out the logic of what I am trying to accomplish before I begin developing. If I find this process to be quick, there’s a list of additional functionality that I can add that all strive to improve the users’ experience. 

For the project, I will generate a 3x3 grid of tiles (9 in total) with the human in the center tile. Each title will contain the species, an image, and a fact. For the human tile, I will display the name of the human rather than species and no fact is necessary for the human. When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. The facts displayed should be random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 should be from the methods I create). One of the titles should be for a pigeon in which the tile should always display, “All birds are considered dinosaurs.”


### Getting Started

1. I'll start with the typical setup - clone theis repo and install the dependencies

```git clone git@github.com:udacity/Javascript.git```

2. Decide how I will work with classes, then build out my classes and objects. 

3. Get human data from the html form to build a human object. I think about what 3 things which I am going to compare with the human object. I may need to create more fields, adjust the fields that are there, or remove fields to correspond with the data I will be collecting. 

4. I will create at least 3 methods that compare dino data to human data. Depending on how I decided to create my objects and what design pattern I chose, I may encounter issues accessing or working with some of the data. 

5. Generate tiles and append to the DOM. Each Dino title must include at least the species, an image and a fact. The dino fact displayed should be chosen at random from at least 6 options (including my 3 methods). The Human tile must include the user’s name, and the human graphic--no fact is needed. The bird tile should include the species, image, and fact, “All birds are considered dinosaurs.”

6. Make certain the grid is not being added until I click the button to submit user data. Additionally, remove the form once the user has clicked to generate the infographic. It is a good idea to remove any calls to console.log at this point. 

7. REFACTOR. At this point, my code should be working properly. Ideally, refactoring happens while I am developing, but as a new developer, I often don’t have the whole picture in my head to be able to do so properly.  Let’s clean the project up. 

8. To preview the final version of my project online, commit the project to my github account. Access the index page at. https://github.com/path/to/project/index.html Copy that URL into https://htmlpreview.github.io/

### Project Requirements

To complete this project, my UI must show the following:

- [ ] The form should contain a button which upon clicking, removes the form
- [ ] The button should append a grid with 9 tiles to the DOM with the Human located in the center
- [ ] The Human tile should display the name of the person and an image, the dino tiles should contain the species, an image and a fact, the bird title should contain the species, image, and "All birds are Dinosaurs."


To complete this project, my backend code must:

- [ ] Contain a class and all necessary objects
- [ ] Contain at least 3 methods for comparing dinosaurs to the human
- [ ] Get user data from the DOM
- [ ] Append tiles with object data to DOM

### Above and Beyond

Some ideas might be to validate the form data to ensure the data is acceptable and complete. Allow the user to generate a new infographic. Move the tile colors from CSS to JS for more control. Randomize the order of the tiles while keeping the human in the middle. Create a hover state on the tiles that displays the rest of the species statistics. Create additional methods for comparing data. Rewrite the project to use constructor functions, factory functions, the module pattern, and revealing module pattern. Change out data and images to generate an infographic of my own choosing. Allow the user to select different units for the numbers and update my methods to account for this.
