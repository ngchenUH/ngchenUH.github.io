/*  
Script for hamburger funtionality and other interactiveness
*/
 
//Global variables


//Hamburger menu function from one of our labs, slightly modified
function borgar() {
    var navlinks = document.getElementById("mobile-nav");

		if (navlinks.style.display === "block") {
		    navlinks.style.display = "none";
		} 
        else {
		    navlinks.style.display = "block";
		}
}

/*function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
		} else {
		    menu.style.display = "block";
		}
}*/
/*Changed getElementById to getElementByClassName, since ids are unique and class feels more flexible. 
Used my extension's autocorrect to discover the class equivalent of getElementById*/


//Other function?

//Looked up "how to add an on click animation html" to add an animation to the hamburger

//Looked up "can you use javascript to change the cotents of a paragraph element html"