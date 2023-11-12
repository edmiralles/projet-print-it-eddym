const slides = [
	{
		"image": "assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//points carroussel
const dotsContainer = document.querySelector('.dots');

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
}

function updateDots() {
	const dots = document.querySelectorAll('.dot');
	for (let j = 0; j < dots.length; j++) {
		const dotSelected = dots[j];
		if (j === slideTab) {
			dotSelected.classList.add('dot_selected');
		} else {
			dotSelected.classList.remove('dot_selected');
		}
	}
}

//multi images carroussel
const rightArrow = document.querySelector(".arrow_right")
const leftArrow = document.querySelector(".arrow_left")
console.log(leftArrow);
console.log(rightArrow);

let slideTab = 0;

function slideImg(n) {
	const slide = slides[n]
	const imgElement = document.querySelector(".banner-img")
	console.log(imgElement);
	const tagLineElement = document.querySelector("#banner p")
	console.log(tagLineElement);
	imgElement.src = slide.image;
	tagLineElement.innerHTML = slide.tagLine;
	console.log(imgElement);
}

//interactivité arrows
rightArrow.addEventListener('click', () => {
	nextSlide();
})

leftArrow.addEventListener('click', () => {
	prevSlide();
})

let StopInterval;

function nextSlide() {
	slideTab++;
	if (slideTab >= slides.length) {
		slideTab = 0;
	}
	slideImg(slideTab);
	updateDots()
	clearInterval(StopInterval);
	StopInterval = setInterval(nextSlide, 4000);
}

function prevSlide() {
	slideTab--;
	if (slideTab < 0) {
		slideTab = slides.length - 1;
	}
	slideImg(slideTab);
	updateDots()
	clearInterval(StopInterval);
	StopInterval = setInterval(nextSlide, 4000);
}

slideImg(slideTab);

//carroussel automatique
StopInterval = setInterval(nextSlide, 4000);
