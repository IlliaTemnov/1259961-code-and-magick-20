'use strict';
(function () {
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
})();
