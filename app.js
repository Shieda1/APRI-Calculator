// https://www.omnicalculator.com/health/apri

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const APRIscoreRadio = document.getElementById('APRIscoreRadio');
const ASTlevelRadio = document.getElementById('ASTlevelRadio');
const ASTupperlimitRadio = document.getElementById('ASTupperlimitRadio');
const plateletcountRadio = document.getElementById('plateletcountRadio');

let APRIscore;
let ASTlevel = v1;
let ASTupperlimit = v2;
let plateletcount = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

APRIscoreRadio.addEventListener('click', function() {
  variable1.textContent = 'AST level';
  variable2.textContent = 'AST upper limit';
  variable3.textContent = 'Platelet count';
  ASTlevel = v1;
  ASTupperlimit = v2;
  plateletcount = v3;
  result.textContent = '';
});

ASTlevelRadio.addEventListener('click', function() {
  variable1.textContent = 'APRI score';
  variable2.textContent = 'AST upper limit';
  variable3.textContent = 'Platelet count';
  APRIscore = v1;
  ASTupperlimit = v2;
  plateletcount = v3;
  result.textContent = '';
});

ASTupperlimitRadio.addEventListener('click', function() {
  variable1.textContent = 'APRI score';
  variable2.textContent = 'AST level';
  variable3.textContent = 'Platelet count';
  APRIscore = v1;
  ASTlevel = v2;
  plateletcount = v3;
  result.textContent = '';
});

plateletcountRadio.addEventListener('click', function() {
  variable1.textContent = 'APRI score';
  variable2.textContent = 'AST level';
  variable3.textContent = 'AST upper limit';
  APRIscore = v1;
  ASTlevel = v2;
  ASTupperlimit = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(APRIscoreRadio.checked)
    result.textContent = `APRI score = ${computeAPRIscore().toFixed(2)}`;

  else if(ASTlevelRadio.checked)
    result.textContent = `AST level = ${computeASTlevel().toFixed(2)}`;

  else if(ASTupperlimitRadio.checked)
    result.textContent = `AST upper limit = ${computeASTupperlimit().toFixed(2)}`;

  else if(plateletcountRadio.checked)
    result.textContent = `Platelet count = ${computeplateletcount().toFixed(2)}`;
})

// calculation

// APRIscore = ((ASTlevel / ASTupperlimit) / plateletcount) * 100

function computeAPRIscore() {
  return ((Number(ASTlevel.value) / Number(ASTupperlimit.value)) / Number(plateletcount.value)) * 100;
}

function computeASTlevel() {
  return ((Number(APRIscore.value) / 100) * Number(plateletcount.value)) * Number(ASTupperlimit.value);
}

function computeASTupperlimit() {
  return  Number(ASTlevel.value) / ((Number(APRIscore.value) / 100) * Number(plateletcount.value));
}

function computeplateletcount() {
  return (Number(ASTlevel.value) / Number(ASTupperlimit.value)) / (Number(APRIscore.value) / 100);
}