//Set questions and possble answers in variable
$(document).ready(function() {

var questions = ["What is the color of the sky?", "What is the radius of Earth, in miles?", "Which football club has the most English Premier League titles?"];
var answers = {
    Q1: ["Green", "Blue", "Purple", "Brown"],
    Q2: ["4420 miles", "3960 miles", "5250 miles", "3070 miles"],
    Q3: ["Manchester United", "Liverpool", "Arsenal", "Nottingham Forest"]
}
var score = 0;

//Main body is just start button. Next step happens when button is pressed, time also starts. 

//On click, push the questions in a div in ".questions", replacing the start button
$(document).on("click", "#start", function() {
    var timer = 15;
    var int = setInterval(ctdn, 1000);
    score = 0;
    $("#time").html("<b>Seconds remaining: " + timer + "</b>");
    $("#questions").html(" ");
for (i=0;i<questions.length;i++) {
    $("#questions").append("<div class='str' id='Q" + (i+1) + "'>" + questions[i] + "</div>")
};

for (i=0;i<4;i++) {
    $("#Q1").append("<div class='custom-control custom-radio'><input type='radio' id='q1a" + (i+1) + "' name='group1' value='" + i +"'>" + "<label ans'>&nbsp;" + answers.Q1[i] + "</label></div>");
    $("#Q2").append("<div class='custom-control custom-radio'><input type='radio' id='q2a" + (i+1) + "' name='group2' value='" + i +"'>" + "<label ans'>&nbsp;" + answers.Q2[i] + "</label></div>");
    $("#Q3").append("<div class='custom-control custom-radio'><input type='radio' id='q3a" + (i+1) + "' name='group3' value='" + i +"'>" + "<label ans'>&nbsp;" + answers.Q3[i] + "</label></div>");
};

function ctdn() {
    timer = timer - 1;
    if (timer === 0) {
        //answer check
        var ans1 = $("input[name=group1]:checked").val();
        var ans2 = $("input[name=group2]:checked").val();
        var ans3 = $("input[name=group3]:checked").val();
        if (ans1 == 1) {
            score++
        }
        if (ans2 == 1) {
            score++
        }
        if (ans3 == 0) {
            score++
        }
        
        clearInterval(int);
        $("#questions").html("<div id='results'><b>Results:</b></div><div>Correct: " + score + "</div><br>");
        $("#questions").append("<button type='button' class='btn btn-primary btn-lg' id='start'>Restart</button>");
        
    }
    $("#time").html("<b>Seconds remaining: " + timer + "</b>")

};

})



//The possible answers should go under the corresponding questions div 

//Make the questions into multiple choice boxes that can be checked, but only one per question. So the buttons must be grouped per question div. 

//At time up, or when submit is pressed, resulted are checked to see if right or wrong. 

//Store correct or incorrect into a variable

//Present results info, give button to restart 




})