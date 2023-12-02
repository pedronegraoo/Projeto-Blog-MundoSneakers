const btn = document.querySelector(".btnComent");
const input = document.querySelector(".input");
const btnSend = document.querySelector(".sendComent");

const keyLocalStorage = "BlogSneakers";
let obj = [];
let armazenar = [];

btn.addEventListener("click", addComent);

// CRIANDO INPUTS E LABEL'S

function addComent() {
  const labelName = document.createElement("label");
  labelName.classList = `labelNome`;
  labelName.textContent = "Nome: ";

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.classList = "input-name";
  inputName.placeholder = "Insira seu nome...";

  const labelComment = document.createElement("label");
  labelComment.classList = "labelComment";
  labelComment.textContent = "Comentário: ";

  const inputComment = document.createElement("textarea");
  inputComment.id = "inputComment";
  inputComment.placeholder = "Digite seu comentário...";

  addComentario(inputName, inputComment, labelName, labelComment);

  input.append(labelName, inputName, labelComment, inputComment);
  btn.removeEventListener("click", addComent);
}

// BOTAO ENVIAR COMENTARIO

function addComentario(inputName, inputComment, labelName, labelComment) {
  btnSend.addEventListener("click", function () {
    if (inputName.value !== "" && inputComment.value !== "") {
      obj = JSON.parse(localStorage.getItem(keyLocalStorage) || "[]");
      obj.push({
        nome: inputName.value,
        comment: inputComment.value,
        createdAt: new Date(),
      });
      localStorage.setItem(keyLocalStorage, JSON.stringify(obj));

      inputName.value = "";
      inputComment.value = "";
      alert(`Comentário feito com sucesso!`);

      newComment();
      // retirarInputs(labelName, labelComment, inputName, inputComment);
    } else {
      alert(`Campo nome/comentário vazio, tente novamente`);
    }
  });
}

// RETIRAR INPUTS

// function retirarInputs(labelName, labelComment, inputName, inputComment) {
//   input.removeChild(labelName);
//   input.removeChild(labelComment);
//   input.removeChild(inputName);
//   input.removeChild(inputComment);
// }

const divAllComments = document.querySelector(".section2-content-top");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

const nomeCard1 = document.querySelector(".nome-card1");
const commentCard1 = document.querySelector(".comment-card1");
const dataCommentCard1 = document.querySelector(".dataComment-card1");

const nomeCard2 = document.querySelector(".nome-card2");
const commentCard2 = document.querySelector(".comment-card2");
const dataCommentCard2 = document.querySelector(".dataComment-card2");

const nomeCard3 = document.querySelector(".nome-card3");
const commentCard3 = document.querySelector(".comment-card3");
const dataCommentCard3 = document.querySelector(".dataComment-card3");

// CARD SELECIONADO

function newComment() {
  const selecionado1 = document.querySelector(".card-comments.selecionado1");
  const selecionado2 = document.querySelector(".card-comments.selecionado2");
  const selecionado3 = document.querySelector(".card-comments.selecionado3");

  if (selecionado1) {
    card1.classList.remove("selecionado1");
    card2.classList.add("selecionado2");
    allExecute(selecionado1);
  } else if (selecionado2) {
    card2.classList.remove("selecionado2");
    card3.classList.add("selecionado3");
    allExecute(selecionado2);
  } else if (selecionado3) {
    card3.classList.remove("selecionado3");
    card1.classList.add("selecionado1");
    allExecute(selecionado3);
  }
}

// FUNÇÃO PARA APAGAR E INSERIR NOVOS DADOS NOS CARD'S

function allExecute(selecionado) {
  if (selecionado.id === "card1") {
    nomeCard1.childNodes[0].remove();
    commentCard1.childNodes[0].remove();
    dataCommentCard1.childNodes[0].remove();

    const newName = document.createElement("h1");
    newName.classList = `newNameCard`;
    newName.innerText = obj[obj.length - 1].nome;

    const newComment = document.createElement("p");
    newComment.classList = `newCommentCard`;
    newComment.textContent = obj[obj.length - 1].comment;

    const data = document.createElement("p");
    data.classList = `newDataCard`;
    data.innerText = `Enviado em: ${obj[
      obj.length - 1
    ].createdAt.toLocaleDateString()}`;

    nomeCard1.append(newName);
    commentCard1.append(newComment);
    dataCommentCard1.append(data);
  } else if (selecionado.id === "card2") {
    nomeCard2.childNodes[0].remove();
    commentCard2.childNodes[0].remove();
    dataCommentCard2.childNodes[0].remove();

    const newName = document.createElement("h1");
    newName.classList = `newNameCard`;
    newName.innerText = obj[obj.length - 1].nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    newComment.classList = `newCommentCard`;
    newComment.textContent = obj[obj.length - 1].comment;

    const data = document.createElement("p");
    data.classList = `newDataCard`;
    data.innerText = `Enviado em: ${obj[
      obj.length - 1
    ].createdAt.toLocaleDateString()}`;

    nomeCard2.append(newName);
    commentCard2.append(newComment);
    dataCommentCard2.append(data);
  } else if (selecionado.id === "card3") {
    nomeCard3.childNodes[0].remove();
    commentCard3.childNodes[0].remove();
    dataCommentCard3.childNodes[0].remove();

    const newName = document.createElement("h1");
    newName.classList = `newNameCard`;
    newName.innerText = obj[obj.length - 1].nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    newComment.classList = `newCommentCard`;
    newComment.textContent = obj[obj.length - 1].comment;

    const data = document.createElement("p");
    data.classList = `newDataCard`;
    data.innerText = `Enviado em: ${obj[
      obj.length - 1
    ].createdAt.toLocaleDateString()}`;

    nomeCard3.append(newName);
    commentCard3.append(newComment);
    dataCommentCard3.append(data);
  }
}
