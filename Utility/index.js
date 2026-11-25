//set constants
const homepageButton = document.getElementById("homepageButton");
const heading = document.getElementById("heading");
const homepageDialog = document.getElementById("homepageDialog");
const closeDialog = document.getElementById("closeDialog");

//Bold heading
heading.addEventListener("mouseover", function(){
    this.style.setProperty("font-weight", "bold")
});
heading.addEventListener("mouseout", function(){
    this.style.setProperty("font-weight", "normal")
});

//Homepage Button
homepageButton.addEventListener("click", function(){
    homepageDialog.showModal();
});
closeDialog.addEventListener("click", function(){
    homepageDialog.close();
});
