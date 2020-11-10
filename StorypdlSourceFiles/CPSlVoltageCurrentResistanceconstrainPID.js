// {CPSlVoltageCurrentResistanceconstrainPID}{680}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(680, 450);
    currentSet=new IanSlider(40,300,100,15,0,[0.7],false);
    resistanceSet=new IanSlider(40,100,100,15,0,[0.7],false);
}

function draw() {
    background(cWhite);

    currentSet.draw();
    resistanceSet.draw();


    var variedcurrent = (currentSet.getValue(0));
    var variedresistance = 0.1+(0.9*resistanceSet.getValue(0));

    var thevoltage=variedcurrent*variedresistance;

    push();
    translate(350, 250);
    pspace2D(150, 200,  " voltage","current", variedcurrent*80, 60*thevoltage);
    pop();


	words("vary\ncurrent",70,310);
    words("set\nresistance",70,110);
	titleBold("Possibilities limited: Set resistance, vary current, see the voltage");
}

function mousePressed(){
        currentSet.mousePressed();
        resistanceSet.mousePressed();
	}

function mouseReleased(){
        currentSet.mouseReleased();
        resistanceSet.mouseReleased();
    }



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
