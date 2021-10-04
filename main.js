let items = document.querySelectorAll(".carousel .carousel-item");
let footerLink1 = document.getElementById("again_faster");
let footerLink2 = document.getElementById("get-help");
let linkClosed1 = false;

let linkClosed2 = false;

let mobileMenuNav = document.getElementById("mobileNav");
//Slider function
let windowWidth = window.innerWidth;

//
function menuMobileOpenHandler() {
	mobileMenuNav.classList.add("visible");
}
function menuMobileCloseHandler() {
	mobileMenuNav.classList.remove("visible");
}

function footerListCloserHandler1() {
	linkClosed1 = !linkClosed1;
	if (linkClosed1) {
		footerLink1.classList.add("closed");
	} else {
		footerLink1.classList.remove("closed");
	}
}
function footerListCloseHandler2() {
	linkClosed2 = !linkClosed2;
	if (linkClosed2) {
		footerLink2.classList.add("closed");
	} else {
		footerLink2.classList.remove("closed");
	}
}
