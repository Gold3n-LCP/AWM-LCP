const carouselSlide = document.querySelector(".carousel-slide");

const imageFrame = document.getElementById("image");
imageFrame.classList.add("imageFrame");

// Array of image URLs
const imagesArray = [
  {
    image: "1.jpg",
  },
  {
    image: "2.jpg",
  },
  {
    image: "3.jpg",
  },
  {
    image: "4.jpg",
  },
  {
    image: "5.jpg",
  },
  {
    image: "6.jpg",
  },
  {
    image: "7.jpg",
  },
  {
    image: "8.jpg",
  },
  {
    image: "9.jpg",
  },
  {
    image: "10.jpg",
  },
];

let counter = 0;
const intervalTime = 1000; // Change interval time in milliseconds (3 seconds in this case)

function nextSlide() {
  counter++;
  if (counter === imagesArray.length) {
    counter = 0; // Reset counter to loop through images
  }
  const imageUrl = imagesArray[counter].image;
  imageFrame.src = "images/" + imageUrl;
}

// Set initial image
imageFrame.src = "images/1.jpg";

// Automatic sliding using setInterval
let slideInterval = setInterval(nextSlide, intervalTime);

// Pause sliding on mouse hover
carouselSlide.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

// Resume sliding on mouse leave
carouselSlide.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, intervalTime);
});
