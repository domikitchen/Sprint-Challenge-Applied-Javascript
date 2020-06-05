// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicTabs = document.querySelector('.topics');

function tabs() {
    const lambdaTopics = axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
        lambdaTopics.then((response) => {
                const topic = response.data.topics;

                console.log(topic);

                topic.forEach(thing => {
                    const tab = document.createElement('div')
                    tab.classList.add('tab');
                    tab.innerHTML = `${thing}`;

                    topicTabs.appendChild(tab);
                    
                    tab.addEventListener('click', (event) => {
                        tab.classList.toggle('active-tab');
                    });
                });
            })
            .catch((error) => {
                console.log(error);
            });
}

tabs();