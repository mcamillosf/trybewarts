const email = document.querySelector('.login');
const password = document.querySelector('.senha');
const bntLogin = document.querySelector('#buttonLogin');
const btnSubmit = document.getElementById('submit-btn');
btnSubmit.disabled = true;
const cBox = document.getElementById('agreement');
const txtArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerText = txtArea.maxLength;
const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const formEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const main = document.getElementById('evaluation-form');

bntLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function agreementChecked() {
  if (cBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

cBox.addEventListener('click', agreementChecked);

function counterLength() {
  const textSize = txtArea.value.length;
  counter.innerText = txtArea.maxLength - textSize;
}

txtArea.addEventListener('keyup', counterLength);

function boxChecked(checkboxes) {
  let vals = '';
  for (let i = 0, n = checkboxes.length; i < n; i += 1) {
    if (checkboxes[i].checked) {
      vals += `,${checkboxes[i].value}`;
    }
  }
  return vals;
}
// https://stackoverflow.com/questions/20068487/getting-multiple-selected-checkbox-values-in-a-string-in-javascript-and-php

// https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes/31113246

// https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button

function createForm(event) {
  event.preventDefault();
  const checkboxes = document.querySelectorAll('.subject:checked');
  const boxlist = boxChecked(checkboxes);
  const box = boxlist.replace(',', ' ');
  const box1 = box.replaceAll(',', ', ');
  const fullName = `${name.value} ${lastName.value}`;
  const newEmail = formEmail.value;
  const selectedHouse = house.value;
  const radioFamily = document.querySelector('input[name="family"]:checked').value;
  const ratioTrybe = document.querySelector('input[name=rate]:checked').value;
  const review = txtArea.value;
  main.innerHTML = `<p>Nome: ${fullName}</p> <p>Email: ${newEmail}</p> 
  <p>Casa: ${selectedHouse}</p> <p>Família: ${radioFamily}</p>
  <p>Matérias: ${box1}</p> <p>Avaliação: ${ratioTrybe}</p> 
  <p>Observações: ${review}</p>`;
  main.style.justifyContent = 'center';
}

btnSubmit.addEventListener('click', createForm);
