function firstElement(array) {
  return array[0];
}

function firstLetter(string) {
  return string[0];
}

const lowerCaseLetter = (letter) => letter.toLowerCase();

const p = new Promise((resolve) => {
  resolve(["Ana", "Carla", "Patricia"]);
});

p.then(firstElement).then(firstLetter).then(lowerCaseLetter).then(console.log);
