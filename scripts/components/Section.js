export class Section{
  #renderer;
  #containerSelector;

  constructor({renderer}, containerSelector){
    this.#renderer = renderer;
    this.#containerSelector = document.querySelector(containerSelector);
  }

  addItem(nodeElemnt){
    this.#containerSelector.prepend(nodeElemnt)
  }

  rendererItems(items){
    items.forEach((item) => {
      this.#renderer(item)
    });
  }
}