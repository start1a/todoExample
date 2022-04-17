const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector('#greeting');

const USERNAME = 'username';
const UI_HIDDEN = 'hidden';

const onLoginButtonClick = (text, e) => {
    e.preventDefault();
    loginForm.classList.add(UI_HIDDEN);
    greeting.classList.remove(UI_HIDDEN);
    greeting.innerText = `Hello, ${text}`;
    localStorage.setItem(USERNAME, text);
}

loginForm.addEventListener('submit', (e) => onLoginButtonClick(loginInput.value, e));

const userName = localStorage.getItem(USERNAME);

if (userName) {
    console.log(`user is exist: ${userName}`);
    greeting.classList.remove(UI_HIDDEN);
    greeting.innerText = `Hello, ${userName}`;
}
else {
    console.log(`user is not exist..`);
    loginForm.classList.remove(UI_HIDDEN);
    greeting.classList.add(UI_HIDDEN);
}