const form = document.querySelector('form')
const userInput = document.querySelector('#username')
const resultComponent = document.querySelector('.search_result')
const errorElement = document.querySelector('#error-msg')


// getting input value from the user
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputVal = userInput.value.trim()
    console.log(inputVal);

    // checking input element is empty or not
    if (!inputVal) {
        console.log('Provide username to search');
        errorElement.textContent = `Provide username to search`
        resultComponent.innerHTML = ''
        return;
    }

    fetchUser(inputVal)

})


// function to make api call

async function fetchUser(username) {
    try {
        // making api call
        const response = await fetch(`https://api.github.com/users/${username}`)

        // Parsing data into json object
        const parsedRes = await response.json();

        // handling errors in different conditions
        if (!response.ok) {

            if (response.status === 404) {
                throw new Error('User not found');
            } else {
                throw new Error(`Network error: ${response.status}`);
            }
        }

        errorElement.textContent = ''

        generateCard(parsedRes) // calling function to create card

    } catch (error) {

        resultComponent.innerHTML = ''

        if (error.message === 'User not found') {
            setErrorMsg('User not found. Please try with a different username.');
        } else {
            setErrorMsg(`Network error: ${error.message}`);
        }
    }
}

// function to generate user card
function generateCard(user) {

    // clearing previously displayed output
    resultComponent.innerHTML = ''

    const renderUser = `<div class="search_result-component">
    <div>
        <img src="${user.avatar_url}" alt="user_avatar" class="avatar" id="user-avatar">
    </div>
    <div class="profile-info">
        <div class="profile-name">
            <h2 id="name">${user.name ? user.name : 'Name is not available'}</h2>
            <p id="user">${user.login ? user.login : 'Username is not available'}</p>
        </div>
        <p id="joining-date">joined 23 feb 2022</p>
        <p id="bio">
            ${user.bio ? user.bio : 'Bio is not available'}
        </p>
    </div>
    <ul class="profile-stats">
        <li id ="followers">${user.followers} <strong>Followers</strong></li>
        <li id ="followings">${user.following} <strong>Followings</strong></li>
        <li id="repo">${user.public_repos} <strong>Repos</strong></li>
    </ul>
    <div class="profile-content_footer">
        <div class="profile-info">
            <div class="profile-info_icon">
                <img src="assets/icon-website.svg" alt="website_icon">
            </div>
            <p class="website">
                <a href="${user.blog}">${user.blog ? user.blog : 'Link not available'}</a>
            </p>
        </div>
        <div class="profile-info">
            <div class="profile-info_icon">
                <img src="assets/icon-twitter.svg" alt="twitter_icon">
            </div>
            <p class="twitter">
                <a href="https://twitter.com/${user.twitter_username ? user.twitter_username : '#'}">${user.twitter_username ? user.twitter_username : 'Username not available'}</a>
            </p>
        </div>
    </div>
</div>`

    resultComponent.insertAdjacentHTML('beforeend', renderUser)

}


// Function to set different error message

function setErrorMsg(msg) {
    errorElement.textContent = msg
}