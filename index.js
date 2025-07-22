
const app = document.getElementById("app");

const state = {
  horario: null,
  comida: null,
};

// Funções de etapa
function renderStep1() {
  app.innerHTML = `
    <h1>Oii bb, seja muito bem-vinda! 😄</h1>
    <button onclick="goToStep(2)">Vamos lá?</button>
  `;
}

function renderStep2() {
  app.innerHTML = `
    <h2>Já que você está livre... vamos sair em um encontro? </h2>
    <button onclick="goToStep(3)">Sim!</button>
    <button id="noBtn" onmouseover="moveNoButton()">Não 🙄​</button>
  `;
  document.getElementById('noBtn').style.position = "absolute";
}

function renderStep3() {
  app.innerHTML = `
    <h2>Escolha sensata!🙂‍↕️​ </h2>
    <p>Escolha o horário:</p>
    <select id="horario">
      <option value="19h">19h</option>
      <option value="20h">20h</option>
      <option value="21h">21h</option>
    </select>
    <p>O que você quer comer? (um dia fora dieta, nn vai te matar)😑</p>
    <select id="comidaSelect">
      <option value="pizza">Pizza</option>
      <option value="sushi">Sushi</option>
      <option value="hambúrguer">Hambúrguer</option>
      <option value="comida fit">Comida fit🫠​</option>
      <option value="custom">Quero escolher...</option>
    </select>
    <input type="text" id="customComida" class="hidden" placeholder="Escreva sua opção">
    <br>
    <button onclick="finalizar()">Confirmar</button>
  `;

  document.getElementById("comidaSelect").addEventListener("change", () => {
    const select = document.getElementById('comidaSelect');
    const input = document.getElementById('customComida');
    if (select.value === 'custom') {
      input.classList.remove("hidden");
    } else {
      input.classList.add("hidden");
    }
  });
}

function renderStep4(msg) {
  app.innerHTML = `
    <h2>Fechou!</h2>
    <p>${msg}</p>
  `;
}

// Navegação
window.goToStep = (step) => {
  switch (step) {
    case 1: renderStep1(); break;
    case 2: renderStep2(); break;
    case 3: renderStep3(); break;
    case 4: renderStep4(state.mensagem); break;
  }
};

// Botão “Não” foge
window.moveNoButton = () => {
  const btn = document.getElementById("noBtn");
  btn.style.top = Math.random() * (window.innerHeight - 80) + "px";
  btn.style.left = Math.random() * (window.innerWidth - 120) + "px";
};

// Finalizar
window.finalizar = () => {
  const horario = document.getElementById("horario").value;
  const cs = document.getElementById("comidaSelect").value;
  const custom = document.getElementById("customComida").value.trim();

  const comida = cs === "custom" ? custom || "alguma surpresa 👀" : cs;
  const msg = `Te busco às ${horario} pra comermos ${comida}. ❤️`;

  state.horario = horario;
  state.comida = comida;
  state.mensagem = msg;

  goToStep(4);
  console.log(msg);
};

// Inicia app
goToStep(1);
