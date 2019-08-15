import "./styles.css";

const ROWS = 3;
const LETTERS_IN_ROW = 20;

const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";
const genStr = num => {
  let str = "";
  for (let i = 0; i < num; i++) {
    const j = Math.ceil(Math.random() * 25);
    str += alphabet[j];
  }
  return str;
};

const res = genStr(LETTERS_IN_ROW * ROWS);
const template = `.{1,${LETTERS_IN_ROW}}`;
const regexp = new RegExp(template, "g");
const resChunks = res.match(regexp);

document.getElementById("app").innerHTML = resChunks.join("<br>");
