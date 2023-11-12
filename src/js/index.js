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

      // input.removeChild(labelName);
      // input.removeChild(inputName).value = "";
      // input.removeChild(labelComment);
      // input.removeChild(inputComment).value = "";
      inputName.value = "";
      inputComment.value = "";
      alert(`Comentário feito com sucesso!`);
      newComment2();
      // btn.addEventListener("click", addComent);
    } else {
      alert(`Campo nome/comentário vazio, tente novamente`);
    }
  });
  input.append(labelName, inputName, labelComment, inputComment);
  // btn.removeEventListener("click", addComent);
}

// btnSend.addEventListener("click", function () {
//   localStorage.setItem("Coment", inputComment.value);
//   inputComment.value = "";
//   // btn.addEventListener("click", addComent);
// });

const divAllComments = document.querySelector(".section2-content-top");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const nomeCard1 = document.querySelector(".nome-card1");
const commentCard1 = document.querySelector(".comment-card1");
const dataComment1 = document.querySelector(".dataComment1");
const nomeCard2 = document.querySelector(".nome-card2");
const commentCard2 = document.querySelector(".comment-card2");
const dataComment2 = document.querySelector(".dataComment2");
const nomeCard3 = document.querySelector(".nome-card3");
const commentCard3 = document.querySelector(".comment-card3");
const dataComment3 = document.querySelector(".dataComment3");
let cont = 1;

function newComment2() {
  const selecionado1 = document.querySelector(".card-comments.selecionado1");
  const selecionado2 = document.querySelector(".card-comments.selecionado2");
  const selecionado3 = document.querySelector(".card-comments.selecionado3");

  if (selecionado1) {
    card1.classList.remove("selecionado1");
    card2.classList.add("selecionado2");
    newCommentCard1();
  } else if (selecionado2) {
    card2.classList.remove("selecionado2");
    card3.classList.add("selecionado3");
    newCommentCard2();
  } else if (selecionado3) {
    card3.classList.remove("selecionado3");
    card1.classList.add("selecionado1");
    newCommentCard3();
  }
}

function newCommentCard1() {
  // card1.removeChild(nomeCard1);
  // card1.removeChild(commentCard1);
  // card1.removeChild(dataComment1);
  // divAllComments.removeChild();

  // não está dando certo pq quando ele cria um novo não se sabe qual posição vai ser criado os elementos do card(nome, comentario e data)
  console.log(card1.childNodes);
  console.log(divAllComments.childNodes);
  console.log(divAllComments.childNodes[1]);

  card1.childNodes[1].remove();
  card1.childNodes[2].remove();
  card1.childNodes[3].remove();
  // divAllComments.childNodes[1].remove();

  const newCard1 = document.createElement("div");
  newCard1.id = "card1";
  newCard1.classList = "card-comments";

  const newName = document.createElement("h1");
  newName.classList = "nome-card1";
  newName.innerText = obj.nome;

  const newComment = document.createElement("p");
  // newComment.innerText = obj.comment;
  newComment.classList = "comment-card1";
  newComment.textContent = localStorage.getItem(obj.nome);

  const data = document.createElement("p");
  data.classList = "dataComment1";
  data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

  card1.append(newName, newComment, data);
  // divAllComments.appendChild(card1);
  // newCard1.append(newName, newComment, data);
  // divAllComments.appendChild(newCard1);
}

function newCommentCard2() {
  // card2.removeChild(nomeCard2);
  // card2.removeChild(commentCard2);
  // card2.removeChild(dataComment2);
  console.log(card2.childNodes[0].remove());
  card2.childNodes[0].remove();
  card2.childNodes[1].remove();
  card2.childNodes[2].remove();

  const newCard2 = document.createElement("div");
  newCard2.id = "card2";
  newCard2.classList = "card-comments";

  const newName = document.createElement("h1");
  newName.classList = "nome-card2";
  newName.innerText = obj.nome;

  const newComment = document.createElement("p");
  // newComment.innerText = obj.comment;
  newComment.classList = "comment-card2";
  newComment.textContent = localStorage.getItem(obj.nome);

  const data = document.createElement("p");
  data.classList = "dataComment2";
  data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

  card2.append(newName, newComment, data);
  // newCard2.append(newName, newComment, data);
  // divAllComments.appendChild(card2);
}

function newCommentCard3() {
  // card3.removeChild(nomeCard3);
  // card3.removeChild(commentCard3);
  // card3.removeChild(dataComment3);
  console.log(card3.childNodes[0].remove());
  card3.childNodes[0].remove();
  card3.childNodes[1].remove();
  card3.childNodes[2].remove();

  const newCard3 = document.createElement("div");
  newCard3.id = "card3";
  newCard3.classList = "card-comments";

  const newName = document.createElement("h1");
  newName.classList = "nome-card3";
  newName.innerText = obj.nome;

  const newComment = document.createElement("p");
  // newComment.innerText = obj.comment;
  newComment.classList = "comment-card3";
  newComment.textContent = localStorage.getItem(obj.nome);

  const data = document.createElement("p");
  data.classList = "dataComment3";
  data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

  card3.append(newName, newComment, data);
  // newCard3.append(newName, newComment, data);
  // divAllComments.appendChild(card3);
}

function newComment() {
  if (cont === 1) {
    // divAllComments.removeChild(card1);
    // card1.removeChild(nomeCard1);
    // card1.removeChild(commentCard1);
    // card1.removeChild(dataComment1);
    nomeCard1.childNodes[0].remove();
    commentCard1.childNodes[0].remove();

    const newCard1 = document.createElement("div");
    newCard1.id = "card1";
    newCard1.classList = "card-comments";

    const newName = document.createElement("h1");
    newName.classList = "nome-card1";
    newName.innerText = obj.nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    newComment.classList = "comment-card1";
    newComment.textContent = localStorage.getItem(obj.nome);

    const data = document.createElement("p");
    data.classList = "dataComment1";
    data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

    // card1.append(newName, newComment, data);
    newCard1.append(newName, newComment, data);
    divAllComments.appendChild(newCard1);

    cont++;
  } else if (cont === 2) {
    card2.remove();

    const newCard2 = document.createElement("div");
    newCard2.id = "card2";
    newCard2.classList = "card-comments";

    const newName = document.createElement("h1");
    newName.classList = "nome-card2";
    newName.innerText = obj.nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    newComment.classList = "comment-card2";
    newComment.textContent = localStorage.getItem(obj.nome);

    const data = document.createElement("p");
    data.classList = "dataComment2";
    data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

    // card2.append(newName, newComment, data);
    newCard2.append(newName, newComment, data);
    divAllComments.appendChild(newCard2);

    cont++;
  } else if (cont === 3) {
    card3.remove();

    const newCard3 = document.createElement("div");
    newCard3.id = "card3";
    newCard3.classList = "card-comments";

    const newName = document.createElement("h1");
    newName.classList = "nome-card3";
    newName.innerText = obj.nome;

    const newComment = document.createElement("p");
    // newComment.innerText = obj.comment;
    newComment.classList = "comment-card3";
    newComment.textContent = localStorage.getItem(obj.nome);

    const data = document.createElement("p");
    data.classList = "dataComment3";
    data.innerText = `Enviado em: ${obj.createdAt.toLocaleDateString()}`;

    // card3.append(newName, newComment, data);
    newCard3.append(newName, newComment, data);
    divAllComments.appendChild(newCard3);

    cont = 1;
  }
}

//Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, laboriosam nemo. Quos minima ad corrupti aut odio exercitationem dolorem a.
