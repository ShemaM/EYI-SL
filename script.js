
const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.querySelector(".left-arrow-wrap .arrow");
const rightArrow = document.querySelector(".right-arrow-wrap .arrow");
const imgBox = document.getElementById("imgBox");
const name = document.getElementById("name");
const profession = document.getElementById("profession");
const description = document.getElementById("description");

let people = [
    {
        photo: 'url("https://i.pinimg.com/236x/61/96/a3/6196a35cfa9e30c9b898e7f9f2de57f0.jpg")',
        name: "Bonkey Muhumure",
        profession: "Diplomate",
        description: "I recently got artificial dreadlocks done at Gasinzira Salon, and I couldn't be happier with the results. The stylist was skilled and took the time to understand the look I wanted. The synthetic hair used feels incredibly realistic, and the color options were extensive. My new dreadlocks are not only stylish but also surprisingly lightweight and comfortable. I appreciate the professionalism and attention to detail at the home of Congolese Artificial Dreadlocks. I'll definitely be returning for future services!"
    },
    {
        photo: "url('https://i.pinimg.com/originals/8f/4b/9a/8f4b9a5c2b077059a1222ac32ee2b5e9.jpg')",
        name: "Dylan Smith",
        profession: "Student",
        description: "I am absolutely thrilled with the artificial dreadlocks I received from Gasinzira Salon. The quality is exceptional, and they look so natural that people often mistake them for real dreads! The installation process was smooth, and the team provided excellent customer service throughout. I highly recommend Gasinzira Salon for anyone looking for high-quality artificial dreadlocks. They've gained a loyal customer in me!"
    },
    {
        photo: "url('https://images-na.ssl-images-amazon.com/images/I/51sWaQsSfIL.jpg')",
        name: "Branson Cook",
        profession: "Web Developer",
        description: " I had an amazing experience getting artificial dreadlocks at Gasinzira Salon: the home of Congolese artificial dreadlocks. The team was friendly, and the atmosphere was comfortable. The stylist was patient in explaining the process and helped me choose the perfect length and thickness for my dreadlocks. The end result exceeded my expectations! The quality of the artificial hair is outstanding, and I've received numerous compliments on my new look. Thank you, Gasinzira Salon, for making me feel confident and stylish!"
    },
    {
        photo: "url('https://cdn.pixabay.com/photo/2012/10/26/02/12/actor-63082_960_720.jpg')",
        name: "Julius Grohn",
        profession: "Designer",
        description: "I'm so impressed with the artificial dreadlocks I got from Gasinzira Salon. The installation was quick and painless, and the attention to detail was remarkable. The synthetic hair used is of high quality and has a natural texture that blends seamlessly with my own hair. I've had them for a few weeks now, and they still look as good as the day I got them. If you're considering artificial dreadlocks, I highly recommend Gasinzira Salon for their expertise and top-notch service."
    }
];

// Set the first person
function displayPerson(personNumber) {
    imgBox.style.backgroundImage = people[personNumber].photo;
    name.innerText = people[personNumber].name;
    profession.innerText = people[personNumber].profession;
    description.innerText = people[personNumber].description;
}

let currentPerson = 0;
displayPerson(currentPerson);

function slide(side) {
    if (side === "left") {
        currentPerson = (currentPerson === 0) ? people.length - 1 : currentPerson - 1;
    } else if (side === "right") {
        currentPerson = (currentPerson === people.length - 1) ? 0 : currentPerson + 1;
    }
    displayPerson(currentPerson);
}

leftArrow.addEventListener("click", () => slide("left"));
rightArrow.addEventListener("click", () => slide("right"));
