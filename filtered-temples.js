const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/320%2C/0/default"
    },
    {
        templeName: "Cape Town South Africa Temple",
        location: "Cape Town, South Africa",
        dedicated: "2022, December, 11",
        area: 21000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/d45d952e583a11ec8730eeeeac1ef8ed58640819/full/320%2C/0/default"
    },
    {
        templeName: "Chicago Illinois Temple",
        location: "Chicago, Illinois, United States",
        dedicated: "1985, August, 9",
        area: 28000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/41f73f53ed9711ec83f6eeeeac1e53c7aa9ac727/full/320%2C/0/default"
    }
];

// Function to create temple cards
function createTempleCard(temple) {
    const card = document.createElement('figure');
    const img = document.createElement('img');
    const caption = document.createElement('figcaption');
    const location = document.createElement('p');
    const dedicated = document.createElement('p');
    const area = document.createElement('p');

    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    caption.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    location.style.color = '#2196f3'; // Blue color
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    dedicated.style.color = '#2196f3'; // Blue color
    area.textContent = `Area: ${temple.area} sq ft`;
    area.style.color = '#2196f3'; // Blue color

    card.appendChild(img);
    card.appendChild(caption);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    document.querySelector('main').appendChild(card);
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear existing temples

    temples.forEach(temple => {
        if (criteria(temple)) {
            createTempleCard(temple);
        }
    });
}

// Event listeners for filtering
document.querySelector('nav').addEventListener('click', event => {
    if (event.target.tagName === 'A') {
        const text = event.target.textContent;
        switch (text) {
            case 'Old':
                filterTemples(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'New':
                filterTemples(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'Large':
                filterTemples(temple => temple.area > 90000);
                break;
            case 'Small':
                filterTemples(temple => temple.area < 10000);
                break;
            default:
                filterTemples(() => true);
                break;
        }
    }
});

// Initialize with all temples
filterTemples(() => true);

// Update footer with current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
