const initialCards = [];
const popups = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup__image');
const popupImages = document.querySelector('.popup_type_opened-image')

for (let i = 0; i <= 6; i++) {
  for (let index = 0; index <= 40; index++) {
    initialCards.push({
      name: index,
      link: `./img/${index}.jpg`
    })
  }
}

export {
  initialCards,
  popups,
  popupImage,
  popupImages
}