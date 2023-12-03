let font;
let editibleString = ""; 
let baseSize = 200; // Initial text size

let amplitude = 100; // Amplitude of the size oscillation
let frequency = 0.01; // Frequency of the oscillation // change visual output
let rotationStep = 0.005; // change visual output
let rotationAngle = 0;

let sliderAmplitude;
let fontSelection;
let checkboxRed;
let checkboxBlue;

function preload() {
  font = loadFont('RubikBubbles-Regular.otf');
	font2 = loadFont('GT-Cinetype-Regular.OTF');
	font3 = loadFont('PixelifySans-VariableFont_wght.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);

// Create checkbox blue and red 
	checkboxBlue = createCheckbox('',false);
  checkboxBlue.position(20, 200);

  checkboxRed = createCheckbox('',false);
  checkboxRed.position(20, 165);
	
// Create amplitude slider
  sliderAmplitude = createSlider(50, 200, amplitude);
  sliderAmplitude.position(20, 50);
  sliderAmplitude.size(120);
	sliderAmplitude.addClass("mySliders");	
	
// Create font selector
	fontSelection = createSelect();
  fontSelection.position(20, 120);
	fontSelection.style('border-radius', '50px');
	fontSelection.style('padding', '0.3em')
	fontSelection.style('background-color', 'rgb(0,255,0)');

// Add font options.
  fontSelection.option(' Bubbles');
  fontSelection.option(' Cinetype');
	fontSelection.option(' Pixel');
	
}

function draw() {
	amplitude = sliderAmplitude.value();
	textAlign(CENTER, CENTER);
	rotationAngle += rotationStep;
  fill(0);
  stroke(0, 255, 0);
	
// Checkboxes > check the state of each checkbox and change stroke color
  if (checkboxRed.checked()) {
		checkboxRed.style('color', 'red'); // Change the color when checked
    stroke(255, 0, 0);
  }

  if (checkboxBlue.checked()) {
    stroke(0, 0, 255);
  }
	
// Use sine function to oscillate the text size
  let textSizeValue = baseSize + amplitude * sin(frameCount * frequency);
  textSize(textSizeValue);
	push();
	translate(width / 2, height / 2); // Translate to the center of the canvas
  rotate(rotationAngle); // Rotate the subsequent drawing operations

	let selection = fontSelection.selected();
	if(selection == "Font Bubbles") {
  	textFont(font)
	} else if(selection == "Font Cinetype") {
		textFont(font2)
	} else if(selection == "Font Pixel") {
		textFont(font3)
	} else {
		textFont(font)
	}
	text(editibleString, 0, 0);
	pop();
	
	
// Type something && editable text
	textSize(50);
	textAlign(LEFT, TOP);
  fill(0);
	strokeWeight(2)
  rect(10, height-80, width-20, 70, 50);
	fill(255)
	noStroke();
	textFont(font2)
	text(" type something: "+editibleString+"", 20, height-80)
	
	
// text slider amplitude
	textFont(font2)
	noStroke();
	textSize(20)
	text("amplitude",20,10)
	
// text font dropdown
	textFont(font2)
	noStroke();
	textSize(20)
	text("select font",20,80)
	
// text font checkbox
	textFont(font2)
	noStroke();
	textSize(20)
	text("red",50,160)
	
	// text font checkbox
	textFont(font2)
	noStroke();
	textSize(20)
	text("blue",50,195)
	
}

function keyTyped() {
  if (keyCode == ENTER || keyCode == BACKSPACE) {
    //value = 255;
		editibleString = "";
 } else if (keyCode == RETURN) {
    clear();
  } else {
    editibleString = editibleString + key;
  }
}

