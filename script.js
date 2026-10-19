const about = document.getElementById("aboutMeText");
about.innerHTML = `Hi, I'm Chijioke Jude, a junior web developer passionate about learning and building with technology.
                    I'm still growing as a developer, but I'm always willing to learn, solve problems, and take on new challenges.
                   My goal is to keep improving and become a more confident and skilled web developer.`

const header = document.getElementById("header");
const servicesContainer = document.getElementById("servicesContainer");
const skillsBox = document.getElementById("skillsBox");
const mediaIcons = document.getElementById("mediaIcons");
const educationContainer = document.getElementById("educationContainer");
const recentWorksContainer = document.getElementById("recentWorksContainer");
const contactForm = document.getElementById("contactForm");


const skills = [
    {
        title: "HTML",
        percentage: 85
    },
    {
        title: "CSS",
        percentage: 75
    },
    {
        title: "JavaScript",
        percentage: 60
    },
];
skills.forEach(skill => {
    const skillElement = document.createElement("div");

    skillElement.className = "skill";

    skillElement.innerHTML = `
        <p>${skill.title} <span id="skillPercentage">${skill.percentage}%</span></p>

        <div class="skillBar">
            <div class="skillLevel" style="width: ${skill.percentage}%"></div>
        </div>
    `;

    skillsBox.appendChild(skillElement);
});


const headerLinks = [
    {
        name: "Header",
        link: "#homePage",
        icon: `<svg viewBox="0 0 512 512">
            <path d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"/>
        </svg>`
    },

    {
        name: "About Me",
        link: "#aboutMeBox",
        icon: `<svg viewBox="0 0 512 512">
            <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>`
    },

    {
        name: "Services",
        link: "#services",
        icon: `<svg viewBox="0 0 512 512">
            <path d="M96 216c81.7 10.2 273.7 102.3 304 232L8 448c99.5-8.1 184.5-137 88-232zM128 64c32.3 35.6 47.7 83.9 46.4 133.6 82.9 33.7 207.3 123.7 233.6 250.4l96 0C463.3 231.9 230.8 79.5 128 64z"/>
        </svg>`
    },

    {
        name: "Qualification",
        link: "#education",
        icon: `<svg viewBox="0 0 512 512">
            <path d="M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"/>
        </svg>`
    },

    {
        name: "My Recent Works",
        link: "#recentWorks",
        icon: `<svg viewBox="0 0 512 512">
            <path d="M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"/>
        </svg>`
    },

    {
        name: "Article",
        link: "#articles",
        icon: `<svg viewBox="0 0 512 512">
                <path d="M118.3 238.4c3.5-12.5 6.9-33.6 13.2-33.6 8.3 1.8 9.6 23.4 18.6 36.6 4.6-23.5 5.3-85.1 14.1-86.7 9-.7 19.7 66.5 22 77.5 9.9 4.1 48.9 6.6 48.9 6.6 1.9 7.3-24 7.6-40 7.8-4.6 14.8-5.4 27.7-11.4 28-4.7 .2-8.2-28.8-17.5-49.6l-9.4 65.5c-4.4 13-15.5-22.5-21.9-39.3-3.3-.1-62.4-1.6-47.6-7.8l31-5zM228 448c21.2 0 21.2-32 0-32L92 416c-21.2 0-21.2 32 0 32l136 0zm-24 64c21.2 0 21.2-32 0-32l-88 0c-21.2 0-21.2 32 0 32l88 0zm34.2-141.5c3.2-18.9 5.2-36.4 11.9-48.8 7.9-14.7 16.1-28.1 24-41 24.6-40.4 45.9-75.2 45.9-125.5 0-85.6-71.8-155.2-160-155.2S0 69.6 0 155.2c0 50.2 21.3 85.1 45.9 125.5 7.9 12.9 16 26.3 24 41 6.7 12.5 8.7 29.8 11.9 48.9 3.5 21 36.1 15.7 32.6-5.1-3.6-21.7-5.6-40.7-15.3-58.6-32.6-60.4-66.1-95.6-66.1-151.7 0-67.9 57-123.2 127-123.2S287 87.3 287 155.2c0 56.1-33.5 91.3-66.1 151.6-9.7 18-11.7 37.4-15.3 58.6-3.4 20.6 29 26.4 32.6 5.1z"/> 
                </svg>`
    },

    {
        name: "Contact Me",
        link: "#contact",
        icon: `<svg viewBox="0 0 512 512">
                <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/>
                 </svg>`
    },
]
headerLinks.forEach(item => {

    const link = document.createElement("a");

    link.href = item.link;
    link.className = "navItem";

    link.innerHTML = `
        ${item.icon}
        <span>${item.name}</span>
    `;

    header.appendChild(link);
});

const socialMedia = [
    {
        name: "TikTok",
        link: "YOUR TIKTOK LINK",
        icon: `<svg viewBox="0 0 448 512">
            <path d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"/>
        </svg>`
    },

    {
        name: "Twitter",
        link: "YOUR TWITTER LINK",
        icon: `<svg viewBox="0 0 512 512">
            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
        </svg>`
    },

    {
        name: "Instagram",
        link: "YOUR INSTAGRAM LINK",
        icon: `<svg viewBox="0 0 448 512">
            <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>`
    },

    {
        name: "YouTube",
        link: "YOUR YOUTUBE LINK",
        icon: `<svg viewBox="0 0 576 512">
            <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/>
        </svg>`
    }
];
socialMedia.forEach(media => {
    const link = document.createElement("a");

    link.href = media.link;

    link.innerHTML = media.icon;

    mediaIcons.appendChild(link);
});

const services = [
    {
        title: "HTML",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M0 32L34.9 427.8 191.5 480 349.1 427.8 384 32 0 32zM308.2 159.9l-183.8 0 4.1 49.4 175.6 0-13.6 148.4-97.9 27 0 .3-1.1 0-98.7-27.3-6-75.8 47.7 0 3.5 38.1 53.5 14.5 53.7-14.5 6-62.2-166.9 0-12.8-145.6 241.1 0-4.4 47.7z"/>
        </svg>`,
        description: "I can create clean and well-structured web pages using HTML."
    },

    {
        title: "CSS",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M480 32l-64 368-223.3 80-192.7-80 19.6-94.8 82 0-8 40.6 116.4 44.4 134.1-44.4 18.8-97.1-333.4 0 16-82 333.7 0 10.5-52.7-333.4 0 16.3-82 407.4 0z"/>
        </svg>`,
        description: "I can style websites to make them clean, responsive, and visually appealing."
    },

    {
        title: "JavaScript",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
        </svg>`,
        description: "I can add interactivity and dynamic features to websites using JavaScript."
    }
];
services.forEach(service => {
    const serviceBox = document.createElement("div");

    serviceBox.className = "serviceBox";

    serviceBox.innerHTML = `
        ${service.icon}
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;

    servicesContainer.appendChild(serviceBox);
});

const education = [
    {
        title: "Education",
        description: "I'm holding an SSCE certificate"
    },

    {
        title: "Experience",
        description: "I have gained practical experience by building projects with HTML, CSS, and JavaScript."
    },

    {
        title: "Certification",
        description: "I am continuously learning and working toward gaining professional certifications."
    }
];
education.forEach(item => {
    const educationBox = document.createElement("div");

    educationBox.className = "educationBox";

    educationBox.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;

    educationContainer.appendChild(educationBox);
});

const projectImages =  {
    "my-weather-app": "https://res.cloudinary.com/ijxhroj8/image/upload/v1791288959/Gemini_Generated_Image_c4l0ccc4l0ccc4l0.jpg",
    "fuel-station-dashboard": "https://res.cloudinary.com/ijxhroj8/image/upload/v1791288785/Gemini_Generated_Image_u0deyfu0deyfu0de.jpg"
};

async function fetchRepos() {
    try {
        const res = await fetch("https://api.github.com/users/Cjay-Jude/repos?per_page=100");
        const repos = await res.json();

        if(!recentWorksContainer) return;
        recentWorksContainer.innerHTML = "";

        repos.forEach(repo => {
            const repoName = repo.name.toLowerCase();
             if (projectImages[repoName]) {
                const imgUrl = projectImages[repoName];

                const card = document.createElement("div");
                card.className = "workCard";

                card.onclick = (e) => {
                    if (!e.target.classList.contains("githubBtn")) {
                        window.open(repo.html_url, "_blank");
                    }
                };

                card.innerHTML = `
                    <div class="cardImageContainer">
                        <img src="${imgUrl}" alt="${repo.name}" class="cardImage">
                    </div>
                    <div class="cardBody">
                        <h3>${repo.name.replace(/-/g, " ").toUpperCase()}</h3>
                        <p>${repo.description || "Project built with HTML, CSS, and JavaScript."}</p>
                        <div class="cardLinks">
                            <a href="${repo.html_url}" target="_blank" class="workBtn githubBtn">View Repo</a>
                        </div>
                    </div>
                `;

                recentWorksContainer.appendChild(card);
            }
        })


    } catch (error) {
        console.error("Error fetching repositories:", error)
    }
}
fetchRepos();




emailjs.init({
    publicKey: "G9EtFbju-MoKFDUN0", // Replace with your actual Public Key from EmailJS
});

// 2. Listen for when the form is submitted
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the page from reloading

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Send the form data using your Service ID and Template ID
    emailjs.sendForm('service_hbd3kvb', 'template_945yhr9', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset(); // Clears the form inputs
            submitBtn.textContent = 'Send';
            submitBtn.disabled = false;
        }, (error) => {
            alert('Failed to send message. Please try again.');
            console.error('FAILED...', error);
            submitBtn.textContent = 'Send';
            submitBtn.disabled = false;
        });
});


const articles = [
    {
        image: "images/article1.jpg",
        title: "My Journey into Web Development",
        description: "What I have learned so far while learning HTML, CSS, and JavaScript.",
        link: "https://example.com/my-article"
    },
    {
        image: "images/article2.jpg",
        title: "Understanding JavaScript Arrays",
        description: "A beginner-friendly explanation of how arrays help organize data.",
        link: "https://facebook.com/javascript-arrays"
    }
];


const articlesContainer = document.getElementById("articlesContainer");


articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "articleCard";

    card.innerHTML = `
    <img src="${article.image}" alt="${article.title}">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
`;

card.onclick = () => {
    window.open(article.link, "_blank");
};
articlesContainer.appendChild(card);
});






