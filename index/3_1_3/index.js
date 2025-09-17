let isEditing = false;
let firstName = 'Jane';
let lastName = 'Jacobs';

const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstNameInput');
const firstNameText = document.getElementById('firstNameText');
const lastNameInput = document.getElementById('lastNameInput');
const lastNameText = document.getElementById('lastNameText');
const editButton = document.getElementById('editButton');
const helloText = document.getElementById('helloText');

form.onsubmit = (e) => {
  e.preventDefault();
  isEditing = !isEditing;
  updateDOM();
};

firstNameInput.oninput = () => {
  firstName = firstNameInput.value;
  updateDOM();
};

lastNameInput.oninput = () => {
  lastName = lastNameInput.value;
  updateDOM();
};

function updateDOM() {
  if (isEditing) {
    editButton.textContent = 'Save Profile';
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = 'Edit Profile';
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }

  firstNameText.textContent = firstName;
  lastNameText.textContent = lastName;
  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  helloText.textContent = `Hello, ${firstName} ${lastName}!`;
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

updateDOM();