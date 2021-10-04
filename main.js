let items = document.querySelectorAll(".carousel .carousel-item");
 let footerLink1=document.getElementById('again_faster');
 let footerLink2=document.getElementById('get-help')
let linkClosed1=false;
 let mobileMenuNav=document.getElementById("mobileNav")
function menuMobileOpenHandler(){
	mobileMenuNav.classList.add("visible")
}
function menuMobileCloseHandler(){
 	mobileMenuNav.classList.remove("visible")
}
let linkClosed2=false;
items.forEach((el) => {
	const minPerSlide = 4;
	let next = el.nextElementSibling;
	for (let i = 1; i < minPerSlide; i++) {
		if (!next) {
			// wrap carousel by using first child
			next = items[0];
			console.log(next);
		}
		let cloneChild = next.cloneNode(true);
		el.appendChild(cloneChild.children[0]);
		next = next.nextElementSibling;
	}
});
function footerListCloserHandler1(){
	linkClosed1=!linkClosed1;
	if(linkClosed1){
		footerLink1.classList.add("closed")
	}else{
		footerLink1.classList.remove("closed")
	}
}
function footerListCloseHandler2(){
	linkClosed2=!linkClosed2;
	if(linkClosed2){
		footerLink2.classList.add("closed")
	}else{
		footerLink2.classList.remove("closed")
	}
}
