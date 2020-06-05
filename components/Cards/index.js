// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const btns = document.querySelectorAll('.tab');
console.log(btns);

const cardContainers = document.querySelector('.cards-container');

function articleTab(specific) {
    const articles = axios.get('https://lambda-times-backend.herokuapp.com/articles')
    articles.then((response) => {
        const data = response.data.articles[specific];

        console.log(data);

        data.forEach(arti => {
            cardContainers.appendChild(cardMaker({ headline: arti.headline, authorsName: arti.authorName, authorPhoto: arti.authorPhoto }));
        });
    })
    .catch((error) => {
        console.log(error);
    });
}


const lambdaTopics = axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
        lambdaTopics.then((response) => {
                const topic = response.data.topics;

                console.log(topic);

                topic.forEach(thing => {
                    if(thing === 'node.js'){
                        thing = 'node';
                    }
                    articleTab(thing);
                });
            })
            .catch((error) => {
                console.log(error);
            });


function cardMaker(parts) {

    const { headline, authorsName, authorPhoto } = parts;

    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);

    headLine.innerHTML = `${headline}`;
    img.src = authorPhoto;
    authorName.innerHTML = `By ${authorsName}`;

    return card;
}