const btn = document.querySelector(".btnComent");
const input = document.querySelector(".input");
const btnSend = document.querySelector(".sendComent");

let obj = {};
let armazenar = [];

btn.addEventListener("click", addComent);
// document.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     btnEnviar();
//   }
// });

function addComent() {
  const labelName = document.createElement("label");
  labelName.classList = "labelNome";
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
  inputComment.placeholder = "Digite algo...";

  btnSend.addEventListener("click", function () {
    if (inputName.value !== "" && inputComment.value !== "") {
      obj = {
        nome: inputName.value,
        comment: inputComment.value,
        createdAt: new Date(),
      };

      armazenar.push(obj);

      // localStorage.setItem(inputName.value, inputComment.value);
      localStorage.setItem(
        obj.nome,
        obj.comment,
        obj.createdAt.toLocaleDateString()
      );

      inputName.value = "";
      inputComment.value = "";
      alert(`Comentário feito com sucesso!`);
      newComment2();

      // ADICIONANDO NOVAMENTO O EVENTO DE CLICK DO +
      // btn.addEventListener("click", addComent);
    } else {
      alert(`Campo nome/comentário vazio, tente novamente`);
    }
  });
  input.append(labelName, inputName, labelComment, inputComment);
  btn.removeEventListener("click", addComent);
}

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

function newComment2() {
  const selecionado1 = document.querySelector(".card-comments.selecionado1");
  const selecionado2 = document.querySelector(".card-comments.selecionado2");
  const selecionado3 = document.querySelector(".card-comments.selecionado3");

  if (selecionado1) {
    card1.classList.remove("selecionado1");
    card2.classList.add("selecionado2");
    // newCommentCard1();
    allExecute(selecionado1);
  } else if (selecionado2) {
    card2.classList.remove("selecionado2");
    card3.classList.add("selecionado3");
    // newCommentCard2();
    allExecute(selecionado2);
  } else if (selecionado3) {
    card3.classList.remove("selecionado3");
    card1.classList.add("selecionado1");
    // newCommentCard3();
    allExecute(selecionado3);
  }
}

// FUNÇÃO PARA APAGAR E INSERIR NOVOS DADOS NOS CARD'S

function allExecute(selecionado) {
  console.log(selecionado);
  console.log(selecionado.id);

  if (selecionado.id === "card1") {
    nomeCard1.childNodes[0].remove();
    commentCard1.childNodes[0].remove();
    dataCommentCard1.childNodes[0].remove();

    const newName = document.createElement("h1");
    // newName.classList = `nome-${selecionado.id}`;
    newName.classList = `newNameCard`;
    newName.innerText = obj.nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    // newComment.classList = `comment-${selecionado.id}`;
    newComment.classList = `newCommentCard`;
    newComment.textContent = localStorage.getItem(obj.nome);

    const data = document.createElement("p");
    // data.classList = `dataComment-${selecionado.id}`;
    data.classList = `newDataCard`;
    data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

    nomeCard1.append(newName);
    commentCard1.append(newComment);
    dataCommentCard1.append(data);
  } else if (selecionado.id === "card2") {
    nomeCard2.childNodes[0].remove();
    commentCard2.childNodes[0].remove();
    dataCommentCard2.childNodes[0].remove();

    const newName = document.createElement("h1");
    // newName.classList = `nome-${selecionado.id}`;
    newName.classList = `newNameCard`;
    newName.innerText = obj.nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    // newComment.classList = `comment-${selecionado.id}`;
    newComment.classList = `newCommentCard`;
    newComment.textContent = localStorage.getItem(obj.nome);

    const data = document.createElement("p");
    // data.classList = `dataComment-${selecionado.id}`;
    data.classList = `newDataCard`;
    data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

    nomeCard2.append(newName);
    commentCard2.append(newComment);
    dataCommentCard2.append(data);
  } else if (selecionado.id === "card3") {
    nomeCard3.childNodes[0].remove();
    commentCard3.childNodes[0].remove();
    dataCommentCard3.childNodes[0].remove();

    const newName = document.createElement("h1");
    // newName.classList = `nome-${selecionado.id}`;
    newName.classList = `newNameCard`;
    newName.innerText = obj.nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    // newComment.classList = `comment-${selecionado.id}`;
    newComment.classList = `newCommentCard`;
    newComment.textContent = localStorage.getItem(obj.nome);

    const data = document.createElement("p");
    // data.classList = `dataComment-${selecionado.id}`;
    data.classList = `newDataCard`;
    data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

    nomeCard3.append(newName);
    commentCard3.append(newComment);
    dataCommentCard3.append(data);
  }
}

// QUERO TESTAR DEPOIS A FUNÇÃO ABAIXO

function allExecute2(selecionado) {
  console.log(selecionado);
  console.log(selecionado.id);
  console.log(`nome${selecionado.id}`);

  // selecionado.remove();

  // selecionado.removeChild(`nome${selecionado.id}`);
  // selecionado.removeChild(`comment${selecionado.id}`);
  // selecionado.removeChild(`dataComment${selecionado.id}`);

  if (selecionado.id === "card1") {
    console.log(nomeCard1);
    console.log(commentCard1);
    console.log(dataCommentCard1);

    // selecionado.removeChild(nomecard1);
    // selecionado.removeChild(commentcard1);
    // selecionado.removeChild(dataCommentcard1);

    nomeCard1.childNodes[0].remove();
    commentCard1.childNodes[0].remove();
    dataCommentCard1.childNodes[0].remove();

    // const newCard = document.createElement("div");
    // newCard.id = "card1";
    // newCard.classList = "card-comments";

    const newName = document.createElement("p");
    newName.classList = `nome-${selecionado.id}`;
    newName.innerText = obj.nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    newComment.classList = `comment-${selecionado.id}`;
    newComment.textContent = localStorage.getItem(obj.nome);

    const data = document.createElement("p");
    data.classList = `dataComment-${selecionado.id}`;
    data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

    nomeCard1.append(newName);
    commentCard1.append(newComment);
    dataCommentCard1.append(data);
    // selecionado.append(newName, newComment, data);

    // card1.append(newName, newComment, data);
    // divAllComments.appendChild(card1);
    // newCard1.append(newName, newComment, data);
    // divAllComments.appendChild(newCard1);
  }
}
