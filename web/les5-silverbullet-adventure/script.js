const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput")

let lokaties =[
    {
        "titel":"Mier rood zwart",
        "image":"img/ant0.jpg"
    },
    {
        "titel":"2 verschillende mieren",
        "image":"img/ant1.jpg"
    },
    {
        "titel":"Mier close up",
        "image":"img/ant2.jpg"
    },
    {
        "titel":"mier gevecht",
        "image":"img/ant3.jpg"
    },
]
//myTitle.innerHTML = "dit is door het script toegevoegd";
//myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value)
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

show(0);