// CPKfPropelledBallonDisagreementPID
var mentonrep = new Scribble();

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont = loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
  createCanvas(740, 600);
}

function draw() {
  background(CWHITE);
  randomSeed(99);
  placeTitleBold(
    "Mental models of a buoyant ball, fired out of the water, when released"
  );

  push();
  placeMentonDroid(
    CIDEABLUE,
    1,
    80,
    300,
    "That's some upward force – the water isn't half pushing",
    180,
    130,
    "R"
  );
  placeMentonRect(12, 6, 0, CWATER, 50, 110, 3, true);
  placeMentonBox(3, 0, CCONPINK, 50, 110, 5, true);
  placeMentonArrow(6, 0, CCONCYAN, 50, 110, 5);
  // 		mentonwords("say more stuff please", 120, 90,50);

  placeMentonXtra(
    180,
    130,
    "It'll push the balloon right out of the water",
    200,
    150,
    "evolve"
  );
  placeMentonRect(12, 6, 0, CWATER, 50, 130, 3, true);
  placeMentonBox(3, 0, CCONPINK, 50, 115, 5, true);
  placeMentonArrow(6, 0, CCONCYAN, 50, 115, 5);

  placeMentonXtra(200, 150, "right\nout", 100, 150, "evolve");
  placeMentonRect(12, 6, 0, CWATER, 50, 130, 3, true);
  placeMentonBox(3, 0, CCONPINK, 50, 80, 5, true);
  placeMentonArrow(6, 0, CCONCYAN, 50, 80, 5);

  pop();

  push();
  placeMentonDroid(
    CIDEAGREEN,
    3,
    400,
    510,
    "I don't think it goes like that at all, although I agree with where you start",
    200,
    150,
    "L"
  );
  placeMentonRect(12, 6, 0, CWATER, 50, 110, 3, true);
  placeMentonBox(3, 0, CCONPINK, 50, 110, 5, true);
  placeMentonArrow(6, 0, CCONCYAN, 50, 110, 5);
  placeMentonWords("but not after that...not at all", 110, 94, 76);

  placeMentonXtra(200, 150, "Less force here", 100, 150, "evolve");
  placeMentonRect(12, 6, 0, CWATER, 50, 130, 3, true);
  placeMentonBox(3, 0, CCONPINK, 50, 115, 5, true);
  placeMentonArrow(4, 0, CCONCYAN, 50, 115, 5);

  placeMentonXtra(100, 150, "No force here", 100, 150, "evolve");
  placeMentonRect(12, 6, 0, CWATER, 50, 130, 3, true);
  placeMentonBox(3, 0, CCONPINK, 50, 80, 5, true);
  // 		mentonarrow(4,0,cconcyan,50,115,5);
  pop();
}
