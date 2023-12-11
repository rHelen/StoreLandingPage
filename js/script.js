
let nome = window.document.getElementById("nome");
let email = document.querySelector("input#email");
let senha = document.querySelector("input#senha");
let confirmarSenha = document.querySelector("#confirmarSenha");
let numero = document.querySelector("#numero");
let nomeOk = false;
let EmailOk = false;
let senhaOk = false;
let telefoneOk = false;
let github = document.querySelector("#github")

nome.style.width = "100%";
email.style.width = "100%";
senha.style.width = "100%";
confirmarSenha.style.width = "100%";
numero.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}
function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") && email.value.indexOf(".com") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail Válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}
function validaSenha() {
  let txtSenha = document.querySelector("#txtSenha");
  if (senha.value.length < 8) {
    txtSenha.innerHTML = "Senha inválida - Utilize uma senha de 8 caracteres";
    txtSenha.style.color = "red";
  } else {
    txtSenha.innerHTML = "Senha válida";
    txtSenha.style.color = "green";
    senhaOk = true;
  }
}
function confirmaSenha() {
  let txtCSenha = document.querySelector("txtCSenha");
  if (confirmarSenha.value.length == senha.value.length) {
    txtSenha.innerHTML = "Confirmação válida";
    txtSenha.style.color = "green";
  } else {
    txtCSenha.innerHTML = "As senhas não condizem";
    txtCSenha.style.color = "red";
  }
}
function validaTelefone(){
    let txtTelefone = document.querySelector("#txtTelefone");
  if (numero.value.length <= 8) {
    txtTelefone.innerHTML = "Telefone inválido";
    txtTelefone.style.color = "red";
  } else {
    txtTelefone.innerHTML = "Telefone válido";
    txtTelefone.style.color = "green";
    telefoneOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && senhaOk == true && telefoneOk == true) {
    alert("Cadastro feito com sucesso!");
  } else {
    alert("Revise os campos e tente novamente");
  }
}

function githubZoom(){
  github.style.width = '14rem'
  github.style.height = '14rem'
}
function githubNormal(){
  github.style.width = '12rem'
  github.style.height = '12rem'
}