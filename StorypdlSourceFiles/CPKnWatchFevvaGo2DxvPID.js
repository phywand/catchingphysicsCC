// KnWatchFevvaGo2DxvPID

var stateof=0;
var runtime=0;
var masterTicker=0;
var stepNumber=0;
const controllers=[];
const scaleFactorDisplacement=20;
const scaleFactorVelocity=2;
var Fevvaposition;
var controlbutton;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	FevvaTop1=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop1.svg");
	FevvaTop2=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop2.svg");
	FevvaTop3=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop3.svg");
	FevvaTop4=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop4.svg");
	FevvaTop5=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop5.svg");
	FevvaTop6=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop6.svg");
	FevvaTop7=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop7.svg");

}
function setup(){
    createCanvas(800, 600);
    
    controlbutton=new CreateControlButton(20,550,60,30);
    
     const xloc =60;
    for (let i = 0; i<2; i++){
		controllers[i]= new CreateControlPuck();
		let yloc = 108+90*i;
		controllers[i].create(xloc,yloc);
    }

}

function draw() {
    background(CWHITE);
    imageMode(CENTER);
    
   var initialdisplacement = createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorDisplacement);
   var Fevvavelocity = createVector(controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorVelocity);

	var Fspeed = Fevvavelocity.mag();
    controlbutton.drawButton();
    
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    
    switch(stateof){
        case 0:
//            ready to go
			placeWords("go",28,height-32);
			runtime=0;
            placeWords("set\nwhere your\ncrow starts",112,80);
            Fevvaposition = initialdisplacement;
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 90);
            masterTicker++;
    
			if (masterTicker%20==0){
				runtime++;
				Fevvaposition.add(Fevvavelocity.mult(2));
				stepNumber++;
			}
			
					stepNumber=stepNumber%7;
					break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 90);
            break;
                      }

    push();
		translate(300,300);
		rotate(Fevvaposition.heading());
		showDisplacement(Fevvaposition.mag(),90,CCONGREEN);
    pop();

    push();
		translate(300+Fevvaposition.x*PIXELSCALING,300+Fevvaposition.y*PIXELSCALING);
        
		push();
			rotate(Fevvavelocity.heading()); 
				 
				switch (stepNumber) {
					case 0:
						image(FevvaTop1,0,0);
					break;

					case 1:
						image(FevvaTop2,0,0);
					break;

					case 2:
						image(FevvaTop3,0,0);
					break;

					case 3:
						image(FevvaTop4,0,0);
					break;

					case 4:
						image(FevvaTop5,0,0);
					break;

					case 5:
						image(FevvaTop6,0,0);
					break;
				
					case 6:
						image(FevvaTop7,0,0);
					break;
				}

		pop();
		push();
			rotate(Fevvavelocity.heading());
			translate((-Fspeed*PXSCALE*PXSCALE/2),-32);
			showVelocity(Fspeed*PXSCALE,90,CCONCYAN);
		pop();
    pop();
    
    push();
		translate(300,300);
		rotate(Fevvaposition.heading());
		drawPoV("CharlieRight");
    pop();
        


	placeWords("set\nbird\nvelocity",112,170);
	placeTitleBold("take your crow for a flight: watch Fevva go");  
}


function mouseReleased(){
	controlbutton.checkPressed();
	}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}




