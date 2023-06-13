const paragraph = document.getElementById("myParagraph");

const button1 = document.getElementById("myFirstbtn");

const button2 = document.getElementById("mySecondbtn");


//const paragraph = document.getElementsByClassName("demo");

/*
parButton.addEventListener("click", function() {
    document.getElementById("demo").textContent = "Hi!" 
}
)
*/
/*
function changetext() {
    paragraph.textContent = "This is the new text.";
}
*/

button1.addEventListener("click", function changetext() {
    paragraph.textContent = "Hello, World!";
})

button2.addEventListener("click", function changetext() {
    paragraph.textContent = "If you're reading this because you think you might be one, my advice is: close this book right now.Believe what-ever lie your mom or dad told you about your birth, and try to lead a normal life.";
})
