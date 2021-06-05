
function foundItem1() {
document.getElementById("hat").style.textDecoration="line-through";
}

var theHat = document.getElementById("thehat");
theHat.addEventListener("click", function() {
    foundItem1("thehat");
}, false);

function foundItem2() {
document.getElementById("sock").style.textDecoration="line-through";
}

var theSock = document.getElementById("thesock");
theSock.addEventListener("click", function() {
    foundItem2("thesock");
}, false);

function foundItem3() {
document.getElementById("rainbow").style.textDecoration="line-through";
}

var theRainbow = document.getElementById("therainbow");
theRainbow.addEventListener("click", function() {
    foundItem3("therainbow");
}, false);

function foundItem4() {
document.getElementById("dice").style.textDecoration="line-through";
}

var theDice = document.getElementById("thedice");
theDice.addEventListener("click", function() {
    foundItem4("thedice");
}, false);

function foundItem5() {
document.getElementById("bow").style.textDecoration="line-through";
}

var theBow = document.getElementById("thebow");
theBow.addEventListener("click", function() {
    foundItem5("thebow");
}, false);


