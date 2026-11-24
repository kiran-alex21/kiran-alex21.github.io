//set constants
const homepageButton = document.getElementById("homepageButton");
const heading = document.getElementsById("heading");

//Bold heading
heading.addEventListener("mouseover", function(){
    this.style.setProperty("font-weight", "bold")
});
heading.addEventListener("mouseout", function(){
    this.style.setProperty("font-weight", "normal")
});

//Magic Button
homepageButton.addEventListener("click", function(){
    alert("YOU CLICKED MY BUTTON!!")
});