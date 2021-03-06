/*Random Quote on load
$(".quotes").css("font-size", "3em"); */
$(".quotes").css("color", "#FFBD16");
$(".quotes").css("opacity", ".9");

function quoteChange() {
    var randnum = Math.random();
        var inum = 23;
        var rand1 = Math.round(randnum * (inum-1));
        var quotes = new Array("Left index finger chopped off with butcher's knife at the age of 14 in failed attempt to make acorn squash soup.", 
                               "During the 2017 marathon season, only had a set of seven complete toenails. They still haven't grown back.",
                               "No Asian Glow!", 
                               "Consumed four total Starbucks drinks: Java Chip, Java Chip, Java Chip. Java Chip. Tall.", 
                               "One Market Pantry jar of Natural Peanut Butter per six days.", 
                               "Sweat machine.", 
                               "Gym ratty.", 
                               "Spontaneous violin jam session with two street artists in Florence.", 
                               "Guess how to pronounce it. Q-I-A-N.", 
                               "Purple cabbage makes Blue Dumplings. A Venetian Classic.", 
                               "Olivia says Qian spent twelve dollars this fiscal year. False.", 
                               "Cracked robin eggs as a profession in Kindergarten.", 
                               "Forced to read Anna Karenina at age 10, could only read it with a pack of Oreos in front of me.", 
                               "True Story, Potential Headline: Alone in Paris for Six Days, All Meals Made from Supermarket Food.", 
                               "Sprained ankle in the rain, presented torturously rank feet to nurse for wrapping.",
                               "Counts in Korean to work out, nothing else. Doesn't know Korean at all.", 
                               "Enjoyed lying on top of cars in motion until a Good Samaritan told us to get off before she called the Cops.", 
                               "Used two Micron pens in place of chopsticks to eat Flamin' Hot Cheetohs",
                               "Listened to 85,872 minutes of music in 2017.", 
                               "PR'ed at the 2017 Baystate Marathon after fainting at mile 25.5", 
                               "Enjoys a cup of tomato juice, no ice, on every flight. Beverage of choice.", 
                               "Customer once asked for a shot of Bailey's, received Bailey's, vodka, Kahlua, and cream.");
        var selectQuote = quotes[rand1];
        return selectQuote;
};   

$(".quotes").text(quoteChange);

/*Hover over image*/
$(".col-sm-5").hover(function(){
    
    $("#img-one").hover(function(){
                        $(".quotes").text("Photography");
    });
    
    $("#img-two").hover(function(){
                        $(".quotes").text("A typographic installation using yarn.");
    });      

    $("#img-three").hover(function(){
                        $(".quotes").text("Crack'd @ Gallery 5");
    });
    
    $("#img-four").hover(function(){
                        $(".quotes").text("On Sand In Water");
    });

    $("#img-five").hover(function(){
                        $(".quotes").text("Unus Mundus");
    });
    
    $("#img-six").hover(function(){
                        $(".quotes").text("Taekwondo");
    });
    
    $("#img-seven").hover(function(){
                        $(".quotes").text("Handy work");
    });
    $("#img-eight").hover(function(){
                        $(".quotes").text("Urban Case Studies");
    });
    $("#img-nine").hover(function(){
                        $(".quotes").text("Piqued your interest yet?");
    });
    
}, function(){
    $(".quotes").text(quoteChange);
});

/*Pop up window on click*/
$("#img-one").click(function()
                 {$("#pop-photo").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-two").click(function()
                 {$("#pop-one").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-three").click(function()
                 {$("#pop-two").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-four").click(function()
                 {$("#pop-three").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-five").click(function()
                 {$("#pop-four").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-six").click(function()
                 {$("#pop-five").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-seven").click(function()
                 {$("#pop-six").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-eight").click(function()
                 {$("#pop-seven").show(500);
                  $("body").css("overflow-y", "hidden");
});
$("#img-nine").click(function()
                 {$("#pop-eight").show(500);
                  $("body").css("overflow-y", "hidden");
});

$(".back").click(function() {
    $(".pop-up").hide(500);
});

$(".gallery-text").hide();

$(".img-gallery").click(function(){
        $(".gallery-text").toggle(500);
});



