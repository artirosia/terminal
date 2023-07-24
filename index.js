const input = document.querySelector(".text_field_box");
const button = document.querySelector(".text_field_button");
const row = document.querySelector(".row");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewWord();
  }
});
button.addEventListener("click", addNewWord);

function addNewWord() {
  const newDictionaryRow = document.createElement("div");
  newDictionaryRow.className = "dictionary_row";
  const newEnglishBox = document.createElement("div");
  newEnglishBox.className = "dictionary_english_box";
  const newEnglish = document.createElement("div");

  const clear = document.createElement("img");
  clear.src = "img/Group 7.svg";
  clear.className = "clear_image";

  const indexes = document.querySelectorAll(".index");

  const newDiv = document.createElement("div");
  const newIndex = document.createElement("span");

  newIndex.className = "index";
  newIndex.innerText = indexes.length + 1;

  if (input.value.length > 7) {
    newDiv.className = "dictionary_russian";
    newDiv.addEventListener("mouseenter", () => {
      full.style.display = "block";
    });
    newDiv.addEventListener("mouseleave", () => {
      full.style.display = "none";
    });
    newDiv.innerText = input.value.slice(0, 7) + "...";
    const full = document.createElement("div");
    full.className = "full_russian";
    full.innerText = input.value;
    newDictionaryRow.append(full);
  } else {
    newDiv.className = "dictionary_russian";
    newDiv.innerText = input.value;
  }

  if (input.value.length > 7) {
    newEnglish.className = "dictionary_english";
    newEnglish.addEventListener("mouseenter", () => {
      full_english.style.display = "block";
    });
    newEnglish.addEventListener("mouseleave", () => {
      full_english.style.display = "none";
    });
    newEnglish.innerText = translit(input.value.slice(0, 7)) + "...";
    const full_english = document.createElement("div");
    full_english.className = "full_english";
    full_english.innerText = translit(input.value);
    newEnglishBox.append(full_english);
    newEnglishBox.append(newEnglish);
    newEnglishBox.append(clear);
  } else {
    newEnglish.className = "dictionary_english";
    newEnglish.innerText = translit(input.value);
    newEnglishBox.append(newEnglish);
    newEnglishBox.append(clear);
  }

  clear.addEventListener("click", () => {
    clear.parentElement.parentElement.remove();
    const indexes = document.querySelectorAll(".index");
    indexes.forEach((element, index) => {
      element.innerText = index + 1;
    });
  });

  newDiv.prepend(newIndex);
  newDictionaryRow.append(newDiv, newEnglishBox);
  row.append(newDictionaryRow);

  input.value = "";
}

function translit(str) {
  let result = "";
  let dictionary = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "'",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "'",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i]] == undefined) {
      result += str[i];
    } else {
      result += dictionary[str[i]];
    }
  }

  return result;
}
