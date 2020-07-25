// const slide = document.querySelector(".hike");

// const hikeExp = document.querySelector(".hike-exp");

// window.addEventListener("scroll", scrollReveal);

// function scrollReveal() {
// 	const hikePos = hikeExp.getBoundingClientRect().top;
// 	const windowHeight = window.innerHeight;
// 	if (hikePos < windowHeight / 1.5) {
// 		hikeExp.style.color = "red";
// 	}
// }

// let options = {
// 	threshold: 0.5,
// };

// let observer = new IntersectionObserver(slideAnim, options);

// function slideAnim(entries) {
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			slide.style.backgroundColor = "white";
// 		}
// 	});
// }

// observer.observe(slide);

const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.Scene({
	triggerElement: ".hike-exp",
	triggerHook: 0.5,
})
	.addIndicators({ colorStart: "white", colorTrigger: "white" })
	.setClassToggle(".hike-exp", "active")
	.addTo(controller);
