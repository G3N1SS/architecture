import { Card } from '../scripts/components/Card.js'
import { Section } from '../scripts/components/Section.js'
import { PopupImage } from './components/PopupImage.js'
import { initialCards, popupImage, popups, popupImages } from '../scripts/utils/constants.js'

const cardSectionInstance = new Section({renderer: ({name, link}) => {
  const cardElement = createCard({name, link})
  cardSectionInstance.addItem(cardElement)
}}, '.gallery')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

function handleClickImage(name,link){
  popupImage.src = link;
  popupImage.alt = name;
  openPopup(popupImages)
}

function createCard({name, link}){
  const card = new Card({name, link, handleClickImage}, '.gallery__template-card').createCard()
  return card
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape)
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

window.onload = function() {

  setTimeout(function(){

    document.body.classList.add('loaded')

    Draggable.create('.gallery', {
        bounds: 'body',
        inertia: true
      })
  })

}
cardSectionInstance.rendererItems(initialCards)