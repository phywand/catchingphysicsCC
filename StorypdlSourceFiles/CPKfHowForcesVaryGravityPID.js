// CPKfHowForcesVaryGravityPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    massSet=new createSliderDivider(20,270,60,15,4,[0.7],false);
exploreThisGraph= new CreateExploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"separation / m","gravity / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(CWHITE);

    massSet.draw();
    exploreThisGraph.draw();
    
    exploreThisGraph.getValues();
    var k = massSet.getValue()/28;
    var theSeparation = -exploreThisGraph.getValues().xSet*1.8;
    theSeparation=constrain(theSeparation,0.2,0.9);
    var theForce = k/(theSeparation*theSeparation);
    if (theForce<1){
    exploreThisGraph.plotValues(theSeparation,theForce);
    }
    
    push();
		translate(35, 450);
		showMass(3, CIDEAGREY);
		showForce(theForce*PXSCALE*5, 90, CGRAVITY);
    pop();
    
    
    placeWords('set mass', 50, 280);

  placeTitleBold("The environment affects the gravity force: set mass nearby, vary separation");
}

function mousePressed(){
    massSet.mousePressed();
    
	}
function mouseReleased(){
    massSet.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
