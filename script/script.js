const riviews = [
    {
        id:1,
        name: "Rohi Sharma",
        work: "Android Developer",
        text: "Make sure your list of responsibilities is detailed but concise. Also emphasize the duties that may be unique to your organization. For example, if you are hiring for an “Event Management” role,",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
    }, 
    {
        id:2,
        name: "Virat Khatri",
        work: "Web Developer",
        text: "his will help candidates understand the work environment and the activities they will be involved in on a daily basis. This level of detail will help the candidate decide if the role and company are",
        img: "https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=170667a&w=0&h=qcveK8RhZyUglSueV-X-aiFTnZCn4y5z13TgPckiYjw=",
    },
    {
        id:3,
        name: "Mohan Goyal",
        work: "Front End Engineer",
        text: "Indicate the title of the manager the person will report to and how they will function within your organization,",
        img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
        
    },
    {
        id:4,
        name: "Suhani",
        work: "UI/UX Designer",
        text: " While you may be tempted to list every requirement you expect from for your ideal candidate, if you include too many qualifications and skills",
        img: "https://www.whatsappimages.in/wp-content/uploads/2022/01/Girl-DP.jpg",
    }
];

// selecting changing element 

const userImage = document.getElementById('user-image');
const userName = document.getElementById('user-name');
const userWork = document.getElementById('user-work');
const userDescription = document.getElementById('user-description');

// Grabing all buttons 

const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const btnRandom = document.getElementById('btn-random');


//Initial Value 0 for rander first element

let initialValue = 0;

// addevent listener for loading 

document.addEventListener('DOMContentLoaded', () => {
    loadData(initialValue)
})

btnNext.addEventListener('click', () => {
    initialValue++;
    if (initialValue > riviews.length-1) {
        initialValue = 0;
    }
    loadData(initialValue);
    console.log('btnNext');
});

btnPrev.addEventListener('click', () => {
    initialValue--;
    if(initialValue < 0) {
        initialValue = riviews.length-1;
    }
    loadData(initialValue);
   
});

btnRandom.addEventListener('click', () => {
    initialValue = Math.floor(Math.random() * riviews.length);
    loadData(initialValue);
    console.log('btnNext');
});

function loadData(person) {
    const riviewItem = riviews[initialValue];
    userImage.src = riviewItem.img;
    userName.textContent = riviewItem.name;
    userWork.textContent = riviewItem.work;
    userDescription.textContent = riviewItem.text;
}

document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === 'ArrowRight') {
        initialValue--;
        if(initialValue < 0) {
            initialValue = riviews.length-1;
        }
        loadData(initialValue);
    } else if(keyCode === 'ArrowLeft') {
        initialValue--;
        if(initialValue < 0) {
            initialValue = riviews.length-1;
        }
        loadData(initialValue);
    } 
   
})

