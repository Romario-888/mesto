const container = document.querySelector('.page');
const popUp = container.querySelector('.popup');
const editButton = container.querySelector('.profile__edit-button');
const closeButton = container.querySelector('.popup__close-button');

const profileForm = container.querySelector('form');
const nameInput = container.querySelector('input[name="name"]');
const professionInput = container.querySelector('input[name="profession"]');

const profileName = container.querySelector('.profile__name');
const profileProfession = container.querySelector('.profile__profession');


function openPopup() {
  popUp.classList.add('popup_opened')
}

function closePopup() {
  popUp.classList.remove('popup_opened')
}

function sendForm(event) {
  event.preventDefault()
  profileName.innerHTML = nameInput.value
  profileProfession.innerHTML = professionInput.value

  closePopup()
}


editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

profileForm.addEventListener('submit', sendForm);
