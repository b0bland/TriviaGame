//Set questions and possble answers in variable
$(document).ready(function() {

var questions = ["What is the color of the sky?", "What is the radius of Earth, in miles?", "Which football club has the most English Premier League titles?"];
var answers = {
    Q1: ["Green", "Blue", "Purple", "Brown"],
    Q2: ["4420 miles", "3960 miles", "5250 miles", "3070 miles"],
    Q3: ["Manchester United", "Liverpool", "Arsenal", "Nottingham Forest"]
}

//Main body is just start button. Next step happens when button is pressed, time also starts. 

//On click, push the questions in a div in ".questions", replacing the start button
$("#start").on("click", function() {
    var timer = 30;
    var int = setInterval(ctdn, 1000);
    $("#time").html("Seconds remaining: " + timer);
    $("#questions").html(" ");
for (i=0;i<questions.length;i++) {
    $("#questions").append("<div class='str' id='Q" + (i+1) + "'>" + questions[i] + "</div>")
};

for (i=0;i<4;i++) {
    $("#Q1").append("<div class='custom-control custom-radio'><input type='radio' class='custom-control-input' id='q1a" + (i+1) + "' name='group1'>" + "<label class='custom-control-label ans'>" + answers.Q1[i] + "</label></div>");
    $("#Q2").append("<div class='custom-control custom-radio'><input type='radio' class='custom-control-input' id='q2a" + (i+1) + "' name='group2'>" + "<label class='custom-control-label ans'>" + answers.Q2[i] + "</label></div>");
    $("#Q3").append("<div class='custom-control custom-radio'><input type='radio' class='custom-control-input' id='q3a" + (i+1) + "' name='group3'>" + "<label class='custom-control-label ans'>" + answers.Q3[i] + "</label></div>");
};

function ctdn() {
    timer = timer - 1;
    if (timer === 0) {
        clearInterval(int);
        $("#questions").html("<div id='results'>Results</div>");
    }
    $("#time").html("Seconds remaining: " + timer)
};

})


//The possible answers should go under the corresponding questions div 

//Make the questions into multiple choice boxes that can be checked, but only one per question. So the buttons must be grouped per question div. 

//At time up, or when submit is pressed, resulted are checked to see if right or wrong. 

//Store correct or incorrect into a variable

//Present results info, give button to restart 




})