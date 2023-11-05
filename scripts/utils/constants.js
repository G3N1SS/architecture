export const initialCards = []

for (let i = 0; i <= 6; i++) {
  for (let index = 0; index <= 40; index++) {
    initialCards.push({
      name: index,
      link: `./img/${index}.jpg`
    })
  }
}