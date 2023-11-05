export class Card{
  #name;
  #imageLink;
  #newCard;
  #cardImage;
  #handleClickImage;

  constructor({name, link, handleClickImage}, templateSelector){
    this.#name = name;
    this.#imageLink = link;
    this.#handleClickImage = handleClickImage
    this.#newCard = document
      .querySelector(templateSelector)
      .content.querySelector(".gallery__item")
      .cloneNode(true);
    this.#cardImage = this.#newCard.querySelector('.gallery__item-img')
  }
  createCard = () => {
    this.#cardImage.src = this.#imageLink;
    this.#cardImage.alt = this.#name;
    this.#cardImage.addEventListener('click', () => {
      this.#handleClickImage(this.#name, this.#imageLink)
    })
    return this.#newCard
  }
}