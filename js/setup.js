'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var secondNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(56, 159, 117)',
  'rgb(146, 100, 161)',
  'rgb(215, 210, 55)',
  'rgb(241, 43, 107)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var randomName = function (namesMassive, secondNamesMassive) {
  var nameIndex = Math.round(Math.random() * (namesMassive.length - 1));
  var secondNameIndex = Math.round(Math.random() * (secondNamesMassive.length - 1));

  return namesMassive[nameIndex] + ' ' + secondNamesMassive[secondNameIndex];
};

var randomCoatColor = function (coatColorMassive) {
  var coatColorIndex = Math.round(Math.random() * (coatColorMassive.length - 1));

  return coatColorMassive[coatColorIndex];
};

var randomEyesColor = function (eyesColorMassive) {
  var eyesColorIndex = Math.round(Math.random() * (eyesColorMassive.length - 1));
  return eyesColorMassive[eyesColorIndex];
};

var unitsMassive = function (unitsQuantity) {
  var massive = [];
  for (var i = 0; i < unitsQuantity; i++) {
    var unit = {
      name: randomName(names, secondNames),
      coatColor: randomCoatColor(coatColor),
      eyesColor: randomEyesColor(eyesColor)
    };
    massive.push(unit);
  }
  return massive;
};

var renderUnit = function (units) {
  var unitElement = similarWizardTemplate.cloneNode(true);

  unitElement.querySelector('.setup-similar-label').textContent = units[i].name;
  unitElement.querySelector('.wizard-coat').style.fill = units[i].coatColor;
  unitElement.querySelector('.wizard-eyes').style.fill = units[i].eyesColor;

  return unitElement;
};

var unitsNumber = 4;

var fragment = document.createDocumentFragment();
for (var i = 0; i < unitsNumber; i++) {
  fragment.appendChild(renderUnit(unitsMassive(4)));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

// ______________________________________________________________________________

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');

var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var wizardCoatInput = document.querySelector('input[name="coat-color"]');
var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
var fireballInput = document.querySelector('input[name="fireball-color"]');

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      setup.classList.add('hidden');
    }
  });
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      setup.classList.add('hidden');
    }
  });
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var getRandomInt = function (numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
};

wizardCoat.addEventListener('click', function (evt) {
  evt.preventDefault();
  var randomColor = wizardCoatColors[getRandomInt(0, wizardCoatColors.length)];
  wizardCoat.style.fill = randomColor;
  wizardCoatInput.value = randomColor;
});

wizardEyes.addEventListener('click', function (evt) {
  evt.preventDefault();
  var randomColor = wizardEyesColors[getRandomInt(0, wizardEyesColors.length)];
  wizardEyes.style.fill = randomColor;
  wizardEyesInput.value = randomColor;
});

fireball.addEventListener('click', function (evt) {
  evt.preventDefault();
  var randomColor = fireballColors[getRandomInt(0, fireballColors.length)];
  fireball.style.background = randomColor;
  fireballInput.value = randomColor;
});
