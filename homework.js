var pics= [
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpeg"
]

var button = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

button.addEventListener("click", function(){
    if (counter == pics.length)
        counter = 0;
    img.src = pics[counter]
    counter += 1;
})
