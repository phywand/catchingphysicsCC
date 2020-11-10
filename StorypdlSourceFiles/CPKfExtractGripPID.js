// {CPKfExtractGripPID}{550}{400}

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/KfIsolateDrag.svg");
}

function setup(){
	createCanvas(550, 400);
	noLoop();
}

function draw() {
	background(cWhite);

	physicalPane(120, 150, 200, 100);
	imageMode(CENTER);
	image(situation,120,150);
	conceptualPane(120, 280, 200, 100);
	transitionRedescribe(120, 215, 90);

	push();
		translate(120, 280);
		mass(3,cdeviceGrey);
		translate(0,15);
	   force(7,270,cgrip);
		pop();

	advicedroid(480, 80, "To identify grip forces on something, first notice any rough surfaces it is touching but not moving past.\n\nIsolate the thing from the surroundings.\nReplace each instance of such gripping by rough surfaces with an arrow, coloured to show a grip force. Draw the arrow longer for a larger force.", 280, 180);

	titleBold("Identifying grip forces: notice, then extract");
}
