function login() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === 'Teke_Love' && password === 'Romagei') {
document.getElementById('login').classList.remove('active');
document.getElementById('panel').classList.add('active');
generateKeys();
} else {
alert('Invalid credentials');
}
}

function generateKeys() {
const keysContainer = document.getElementById('keys');
keysContainer.innerHTML = ''; // Clear previous keys

for (let i = 0; i < 5; i++) {
const key = generateKey();
const keyElement = document.createElement('div');
keyElement.textContent = key;
keysContainer.appendChild(keyElement);
}
}

function generateKey() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let key = '';
for (let i = 0; i < 50; i++) {
key += characters.charAt(Math.floor(Math.random() * characters.length));
}
return key;
}