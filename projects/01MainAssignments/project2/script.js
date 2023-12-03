let angle = 200
let angleIncrement = 0.10; // Adjust this value to control the rotation speed
let backgroundColor = 255/2;

let myStroke = 1.2;


//Slider

let sliderTrackHeight = 400;
let sliderTrackWidth = 25;

let sliderY;
let sliderDiameter = sliderTrackWidth;
let sliderColor;


function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)

	//slider
	sliderY = height / 2 - sliderDiameter / 2;
	sliderColor = color(0, 0, 255);

}


function draw() {

	background(0,0,backgroundColor)
	fill(0)
	stroke(255)
	strokeWeight(myStroke)
	noCursor();

	/*function myText(){
	textSize(300)
	textAlign(CENTER)
	fill(255)
	text('scroooooooooooool', 0,200)
	}*/

	
	//slider
	// Draw the slider track
	fill(0);
	rectMode(CENTER)
	rect(width / 2, height / 2, sliderTrackWidth, sliderTrackHeight, 200);

	// Draw the slider handle
	push()
	noStroke();
	fill(sliderColor);
	ellipseMode(CENTER)
	ellipse(width / 2, sliderY, sliderDiameter - 2);

	// Check if the mouse is over the slider handle
	let isMouseOverSlider =
		mouseX > width / 2 - sliderDiameter / 2 &&
		mouseX < width / 2 + sliderDiameter / 2 &&
		mouseY > sliderY - (sliderDiameter / 2) &&
		mouseY < sliderY + (sliderDiameter / 2);

	// Change slider handle color based on mouse interaction
	if (isMouseOverSlider) {
		sliderColor = color(255); // white when the mouse is over
		angle += 0.1; // Increment the angle by a smaller value
	} else {
		angleIncrement = angleIncrement * 0.9
		angleIncrement += (abs(pmouseX - mouseX) / 300) * 0.9
		angle += angleIncrement; // Increment the angle by a smaller value

		sliderColor = color(0, 0, 255); // Blue otherwise
	}
	pop()

	//draw_mouse(pmouseX*20, pmouseY*20, 2, 0); // Call the draw_mouse function with the current mouse position and a size of 20


	// Use lerp to extend the gap between current and previous mouse positions
	let lerpedX = lerp(pmouseX, mouseX, 10);
	let lerpedY = lerp(pmouseY, mouseY, 10);


	draw_mouse(pmouseX, lerpedY, 3); // Call the draw_mouse function with the lerped mouse position and a size of 20

	angleIncrement = angleIncrement * 0.9
	angleIncrement += (abs(pmouseX - mouseX) / 300) * 0.9
	angle += angleIncrement; // Increment the angle by a smaller value
	//angle++;


}

function draw_mouse(x, y, size = 1) {
	push()
	beginShape();
	translate(x, y)
	strokeWeight(1.2)
	rotate(angle)
	vertex(0, 0)
	vertex(0, 0 + 17 * size)
	vertex(0 + 4 * size, 0 + 13 * size)
	vertex(0 + 7 * size, 0 + 20 * size)
	vertex(0 + 10 * size, 0 + 19 * size)
	vertex(0 + 7 * size, 0 + 12 * size)
	vertex(0 + 12 * size, 0 + 12 * size)
	endShape(CLOSE)
	pop()

}

function mousePressed() {
	//pmouseX++;
	angle++;
}

//slider
function mouseDragged() {
	// Check if the mouse is over the slider handle while dragging
	if (
		mouseX > width / 2 - sliderDiameter / 2 &&
		mouseX < width / 2 + sliderDiameter / 2
	) {
		// Update the slider position based on mouseY
		let top = height / 2 - sliderTrackHeight / 2 + (sliderDiameter / 2);
		let btm = height / 2 + sliderTrackHeight / 2 - (sliderDiameter / 2)
		sliderY = mouseY;
		sliderY = constrain(sliderY, top, btm);

		//	sliderY = constrain(sliderY, height/2 - sliderTrackHeight/2 +(sliderDiameter/2) , height/2 + sliderTrackHeight/2 -(sliderDiameter/2));
		backgroundColor = map(sliderY, top, btm, 0, 255);
		//sliderY = map(sliderY, top, btm, 0, windowWidth);
		//myStroke = map(sliderY, top, btm, 1.2, 10);
		//angle = map(sliderY, top, btm, 0, 255);
	}
}
