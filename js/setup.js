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
  var i = Math.round(Math.random() * (namesMassive.length - 1));
  var j = Math.round(Math.random() * (secondNamesMassive.length - 1));

  return namesMassive[i] + ' ' + secondNamesMassive[j];
};

var randomCoatColor = function (coatColorMassive) {
  var k = Math.round(Math.random() * (coatColorMassive.length - 1));

  return coatColorMassive[k];
};

var randomEyesColor = function (eyesColorMassive) {
  var l = Math.round(Math.random() * (eyesColorMassive.length - 1));
  return eyesColorMassive[l];
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
  unitElement.querySelector('.wizard-eyes').style.fill = units[i].coatColor;

  return unitElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderUnit(unitsMassive(4)));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
