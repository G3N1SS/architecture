import { Card } from '../scripts/components/Card.js'
import { Section } from '../scripts/components/Section.js'
import { initialCards } from '../scripts/utils/constants.js'

const cardSectionInstance = new Section({renderer: ({name, link}) => {
  const cardElement = createCard({name, link})
  cardSectionInstance.addItem(cardElement)
}}, '.gallery')


function createCard({name, link}){
  const card = new Card({name, link}, '.gallery__template-card').createCard()
  return card
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