'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var TITLE_HEIGHT = 120;
  var BAR_WIDTH = 50;
  var barHeight = CLOUD_HEIGHT - GAP - TITLE_HEIGHT - GAP;
  var titleFirstRow = 'Ура вы победили!';
  var titleSecondRow = 'Список результатов:';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.textBaseLine = 'hanging';
    ctx.font = '16px PT Mono';
    ctx.fillText(titleFirstRow, CLOUD_X + (GAP * 3), CLOUD_Y + (GAP * 3));
    ctx.fillText(titleSecondRow, CLOUD_X + (GAP * 3), CLOUD_Y + (GAP * 5));

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {

      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + (GAP * 4) + (((GAP * 4) + BAR_WIDTH) * i), CLOUD_Y + CLOUD_HEIGHT - (GAP * 2));
      ctx.fillText(Math.round(times[i]), CLOUD_X + (GAP * 4) + (((GAP * 4) + BAR_WIDTH) * i), CLOUD_Y + CLOUD_HEIGHT - (GAP * 5) - (barHeight * times[i]) / maxTime);

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random() * 101) + '%, 50%)';
      }
      ctx.fillRect(CLOUD_X + (GAP * 4) + (((GAP * 4) + BAR_WIDTH) * i), CLOUD_Y + CLOUD_HEIGHT - (GAP * 4), BAR_WIDTH, -(barHeight * times[i]) / maxTime);
    }
  };
}());
