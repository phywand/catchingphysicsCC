// CPSnSlipHaulingForceDistanceSharePID

const magnitudes=[];
var values = [];
const scaleFactor=200;
const pucksinsethorizontal = 120;
const locpucks =[[pucksinsethorizontal,130],[520-pucksinsethorizontal,130]];
const tradeOffOffset = 310;
const powerbarOffset = 140;



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup(){
    createCanvas(550,530);
    
    for (let i = 0; i<2; i++){
		magnitudes[i]= new controlPuckpositive();
		magnitudes[i].create(locpucks[i][0],locpucks[i][1]);
    }
boxesbutton = new checkButton(20, 300,"trade-offs",false);
	
}

function draw() {
    background(cWhite);
    for (let i = 0; i<2; i++){
    values[i] = createVector(magnitudes[i].getValues().xSet,magnitudes[i].getValues().ySet).mult(scaleFactor);
    }
    boxesbutton.drawButton();
    
	words("choose this way...", locpucks[0][0]-40,locpucks[0][1]-45);
	words("distance", locpucks[0][0]-5,locpucks[0][1]+61);
	words("force", locpucks[0][0]+50, locpucks[0][1]-28);

	words("...or this way", locpucks[1][0]-40,locpucks[1][1]-45);
	words("distance", locpucks[1][0]-5,locpucks[1][1]+61);
	words("force", locpucks[1][0]+50, locpucks[1][1]-28);
		push();
			translate(locpucks[0][0],locpucks[0][1]+powerbarOffset);
			scale(1.2);
			energy(values[0].x*values[0].y/1800);
			translate(0,170);
			displacement(values[0].x/9, 90, cideaGrey);
			translate(0,20);
			force(values[0].y/7, 90, cideaRed);
			
        pop();
        push();
			translate(locpucks[1][0],locpucks[1][1]+powerbarOffset);
			scale(1.2);
			energy(values[1].x*values[1].y/1800);
			translate(0,170);
			displacement(values[1].x/9, 90, cideaGrey);
			translate(0,20);
			force(values[1].y/7, 90, cideaRed);
        pop();
		
	
	
	if (boxesbutton.buttonisChecked){
    
	tradeOff(locpucks[0][0],locpucks[0][1]+tradeOffOffset,values[0].x,values[0].y,ccurrent,cpotentialdifference);
	tradeOff(locpucks[1][0],locpucks[1][1]+tradeOffOffset,values[1].x,values[1].y,ccurrent,cpotentialdifference);
}

   titleBold("Trade-off: a choice to haul across a surface");
}

function mouseReleased(){
	boxesbutton.changeState();
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}



function tradeOff(xloc,yloc,hquantity,vquantity,hqcolour,vqcolour){
fill(ccongray);
noStroke();
rect(xloc, yloc, hquantity, -vquantity);
strokeWeight(2);
stroke(vqcolour);
line(xloc, yloc, xloc, yloc-vquantity);
stroke(hqcolour);
line(xloc, yloc, xloc+hquantity, yloc);
}
