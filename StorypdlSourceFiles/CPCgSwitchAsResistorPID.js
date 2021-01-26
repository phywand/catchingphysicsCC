// {CPCgSwitchAsResistorPID}{600}{350}

var  completeloop=true;
var magnitudetheCurrent =0;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}

function setup(){
    createCanvas(600, 350);
    controlbutton=new CreateControlButton(336,284,112,30);
	advicebutton = new CreateCheckButton(600-147, 65,"tell me more",false);
	loopbutton = new CreateCheckButton(600-147+11, 284,"show loop",false);

}

function draw() {
    background(CWHITE);
    controlbutton.drawButton();
    advicebutton.drawButton();
    loopbutton.drawButton();

    if (controlbutton.buttonwasPressed){
		completeloop=!completeloop;
		controlbutton.buttonwasPressed=false;
    }

    if(completeloop==true){
		placeWords("break loop",344,306);
		var magnitudetheCurrent=5;
    }

    if(completeloop==false){
		placeWords("complete loop",344,306);
		var magnitudetheCurrent=0;
    }

     push();
		translate(100, 200);
		if(loopbutton.buttonisChecked){
			drawLoopOne();
		}
		drawCircuitSimple("bulb");
		if(completeloop==true){
			push();
				translate(30,0);
				showCurrentArrow(magnitudetheCurrent,0);
				translate(156,0);
				showCurrentArrow(magnitudetheCurrent,180);
				translate(-80, 0);
				showCurrentArrow(magnitudetheCurrent,90);
				showCurrentArrow(magnitudetheCurrent,270);
			pop();
			if (advicebutton.buttonisChecked){
				placeAdviceDroid(428,-90,"A complete loop and a small resistance. High current everywhere in the loop.", 140, 90);
			}

		}
	pop();


    if(completeloop==false){
		push();
			translate(200, 302);
			fill(CWHITE);
			rect(0, -10, 40, 30);
			stroke(CCIRCUITRED);
			strokeWeight(1);
			line(0, 5, 40, -10);
		pop();
    if (advicebutton.buttonisChecked){

			placeAdviceDroid(428+100,200-90,"A very large resistance because there is a gap in the loop. No current anywhere in the loop.", 140, 90);
			}
    }




    placeTitleBold("Make and break a loop to change the resistance");
}

function mouseReleased(){
	controlbutton.checkPressed();
	advicebutton.changeState();
	loopbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
