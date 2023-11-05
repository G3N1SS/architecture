export class Card{
  #name;
  #imageLink;
  #templateSelector;
  #newCard;
  #cardImage

  constructor({name, link}, templateSelector){
    this.#name = name;
    this.#imageLink = link;
    this.#templateSelector = templateSelector;
    this.#newCard = document
      .querySelector(templateSelector)
      .content.querySelector(".gallery__item")
      .cloneNode(true);
    this.#cardImage = this.#newCard.querySelector('.gallery__item-img')
  }
  createCard = () => {
    this.#cardImage.src = this.#imageLink;
    this.#cardImage.alt = this.#name;
    return this.#newCard
  }
}