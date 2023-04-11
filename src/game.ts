// Random api I found online
const randomURL = "https://random-word-api.herokuapp.com/word";

export const setupGame = async (
  seenButton: HTMLButtonElement,
  newButton: HTMLButtonElement,
  wordHeading: HTMLHeadingElement
) => {
  wordHeading.innerHTML = "";
  const randomWord = await (await fetch(randomURL)).json()
  wordHeading.innerHTML = `${randomWord}`;

}
