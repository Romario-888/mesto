const container = document.querySelector('.page'); //основной контейнер
const popUp = container.querySelector('.popup');  //всплывающее окно popup
const editButton = container.querySelector('.profile__edit-button'); // открывающая кнопка
const closeButton = container.querySelector('.popup__close-button');  // закрывающая кнопка

const profileForm = container.querySelector('form');  // блок form в popup
const nameInput = container.querySelector('input[name="name"]');  // поле имя в форме
const professionInput = container.querySelector('input[name="profession"]');  //поле профессия в форме

const profileName = container.querySelector('.profile__name');  //имя на странице
const profileProfession = container.querySelector('.profile__profession');  //профессия на странице


function openPopup() {
  popUp.classList.add('popup_opened')  //добавляем класс открывается popup
  nameInput.value = profileName.textContent
  professionInput.value = profileProfession.textContent
}

function closePopup() {
  popUp.classList.remove('popup_opened')  //удаляем класс при закрытии popup
}

function sendForm(event) {
  event.preventDefault()  //тормозим перезагрузку
  profileName.textContent = nameInput.value  // в блок profileName вставляем текст, который берем из value input
  profileProfession.textContent = professionInput.value  //  в блок profileProfession вставляем текст, который берем из value input

  closePopup()
}


editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

profileForm.addEventListener('submit', sendForm);
