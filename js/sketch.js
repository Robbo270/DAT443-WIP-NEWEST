/* var WidthRect = 70;
var heightRect = 70;
var particles = []; */

var c1 = function(p){

    var WidthRect = 70;
    var heightRect = 70;

    p.setup = function() {
    p.cursor(CROSS,32,32)
    var canvas = createCanvas(80,80);
    canvas.parent('#sketch1');
    p.background(0);
    frameRate(fr);
        let fr = 165;
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });
// Cursor Pointer (Cross to show where user is drawing)
}


let colorPicker;
p.setup = function() {
    myColor =  p.createColorPicker(p.color(0));
  p.createCanvas(80, 140);
  colorPicker = p.createColorPicker('#ffffff');
  colorPicker.position(125, p.height);
  myColor.position(175, p.height);
  p.cursor(p.CROSS,32,32)
    var canvas = p.createCanvas(innerWidth, innerHeight);
    canvas.parent("sketch1");
    p.background(colorPicker.color());
// Colour Picker to Choose Background and ToolTip Colours


button = p.createButton('Press to Randomise Background');
  button.position(25, 200);
  button.mousePressed(changeBG)
// Randomise Background Colour Button


  button = p.createButton('Press "S" to save');
  button.position(80, 280);
// Save Command Key Button


  button = p.createButton('Press "Enter" to Clear Page');
  button.position(40, 360);
// Clear Page/Refresh Page Command Key
}


let button;
        p.setup = function() {
        button = p.createButton('Square');
        button.position(120, 440);

        button = p.createButton('Circle');
        button.position(125, 520);

        button = p.createButton('Triangle');
        button.position(117.5, 600);
    }


p.draw = function(){
    if(p.mouseIsPressed === true){
        p.fill(myColor.color());
        p.noStroke();
    p.ellipseMode(p.CENTER)
    p.ellipse(p.mouseX, p.mouseY, 50);
    }
// Drawing Tool
}


//p.mousePressed = function() {
//    if(p.mouseButton == p.LEFT){
//    noStroke
//    p.fill(myColor.color());
//    p.ellipseMode(p.CENTER)
//    p.ellipse(p.mouseX, p.mouseY, WidthRect, heightRect);
//    }
//}


//p.mousePressed = function() {
    //noStroke
    //p.fill(myColor.color());
    //if (button 'Square' mousePressed(p.rect));
   // p.RectMode(p.CENTER)
    //p.rect(p.mouseX, p.mouseY, WidthRect, heightRect);
    //if (button Triangle .mousePressed(p.triangle));
    //p.TriangleMode(p.CENTER)
    //p.triangle(p.mouseX, p.mouseY, WidthRect, heightRect);
    //if (button Circle .mousePressed(p.ellipse));
    //p.ellipseMode(p.CENTER)
    //p.ellipse(p.mouseX, p.mouseY, WidthRect, heightRect);


p.keyPressed = function() {
    if(p.keyCode == p.ENTER){
        p.background(colorPicker.color());
    }
// Once Colour is selected, this applies the Background Colour Change


    if(p.key === 's'){
        p.saveCanvas('canvas1', 'jpg');
    }
// Saves the Canvas as a jpg
}


function changeBG() {
    let val = p.random(255);
    p.background(val);
  }
// Randomiser Code for the "Click to Randomise Background Feature"


var c2 = function(p){

    var WidthRect = 70;
    var heightRect = 70;

    p.setup = function() {
        var canvas = p.createCanvas(innerWidth - 700,innerHeight - 250);
        canvas.parent('#sketch2');
        p.background(0);
        p.colorMode(p.HSB);
        for(var i = 0; i < 500; i++){
            p.circles();  
        }
// Creates the Canvas for the user to Draw on
    }
}
    
    p.draw = function() {
    }
    
    p.circles = function() {
        var x = p.random(p.width);
        var y = p.random (p.height);
        var d = p.random(5, 150);
        var hue = p.random(110, 255)
        p.noStroke();
        p.fill(hue, 255, 255, 0.1);
        p.circle(x, y, d);
    }
// Code for the Bubble Filter Canvas (Colour, Intensity/Amount and Size)
}


var sketch1 = new p5(c1);
var sketch2 = new p5(c2);
