/*El método getElementById permite, como su nombre indica,
 seleccionar un elemento del documento por medio del valor 
 del atributo id que se le haya asignado*/

const title = document.getElementById('title1');
const subtitle = document.getElementsByClassName('subtitulo');
const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, subtitles); 

//Se actualiza en nombre del subtitulo 
secondTitle.innerHTML = "DOM API";

//Se crea un perfil de usuario 
const user1 = {
    name: 'Hugo Hernández',
    age: '26',
    mail: 'hugo@mail.com',
    favSports: ['Bodybuilding', 'basquetball', 'fultabll'], 
}

function createUser(user1) {

    document.getElementById('username').textContent = user1.name; 
    document.getElementById('userage').textContent = user1.age; 
    document.getElementById('usermail').textContent = user1.mail; 

    const ul = document.getElementById('fav-Sports');

    user1.favSports.forEach((Sports) => {
        const li = document.createElement('li');
        li.textContent = Sports;
        ul.appendChild(li);
    })
}
createUser(user1);

// PRA PODER ACTUALIZAR EL NOMBRE DEL USUARIO 

const inputName = document.getElementById('name');
const userName = document.getElementById('username');
const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
})

// ¿SE PUEDE ACTUALIZAR LA EDAD? 
const inputAge = document.getElementById('age');
const userAge = document.getElementById('userage');
const profileAge = document.getElementById('ProfileAge');

profileAge.addEventListener('click', () => {
    userAge.textContent = inputAge.value;
})

// ¿SE PUEDE ACTUALIZAR LA EDAD? 
const inputMail = document.getElementById('mail');
const userMail = document.getElementById('usermail');
const profileMail = document.getElementById('ProfileMail');

profileMail.addEventListener('click', () => {
    userMail.textContent = inputMail.value;
})

/** ***************************************************************** */

// ¿Y si creamos otro usuario? 
const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music:['Rammstein', 'Interpol', 'TOOL', 'Black Sabbath']
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music:['Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte']
        
    }
]

const CARD_SECTION = document.getElementById('profiles');


const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}


const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        fav_music: [],
    }
    return userElements;
}

const populateElements = (user1, userElements) => {
    userElements.user_name.textContent = user1.user_name;
    userElements.age.textContent = user1.age;
    userElements.description.textContent = user1.description;

    const bandList = user1.fav_music.map (e => {

        const pElement = document.createElement('ul');
        pElement.textContent = e;
        return pElement;
    })

    userElements.fav_music = bandList;
    return userElements;
}


const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description);
}

users.forEach(user1 => {
    const card = createCard();
    const userElements = createDescription();

    const elementsWithData = populateElements(user1, userElements);
    renderElements(card, elementsWithData);
    CARD_SECTION.append(card);

})