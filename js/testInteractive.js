var pupilsHTMLCollection = document.getElementsByClassName("pupil");
var pupilsArray = Array.from(pupilsHTMLCollection);

console.log("pupilsArray", pupilsArray)

var input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
        current:0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current:0,
    }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;


var output = {
    x: {
        start: -70,
        end: 70,
        current:0,
    },
    y: { 
        start: -70,
        end: 70,
        current:0,
    },
};


output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

var handleMouseMove = function(event) {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
    
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);

    pupilsArray.forEach(function (pupil, k) {
        pupil.style.transform = "translate("+ output.x.current +"px, "+ output.y.current +"px)";
    });


    //console.log("output.x.current", output.x.current);

    // if(input.mouseX.fraction > 1) {
    //     input.mouseX.fraction = 1;
    // }
    // if(input.mouseX.fraction < 0) {
    //     input.mouseX.fraction = 0;
    // }
    
    // console.log("fraction X", input.mouseX.fraction)
    // console.log("fraction Y", input.mouseY.fraction)
}

var handleResize = function() {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;

}




window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleResize);

