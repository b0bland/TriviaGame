//Set questions and possble answers in variable
$(document).ready(function() {

var questions = ["What is the color of the sky?", "What is the radius of Earth, in miles?", "Which football club has the most English Premier League titles?"];




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


function ctdn() {
    timer = timer - 1;
    if (timer <= 0) {
        clearInterval(int);
        //results
        return;
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