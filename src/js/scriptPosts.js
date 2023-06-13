import ActionsArr from "./data/actionsData.js";
import ActionCard from "./classes/ActionClass.js";

const selector = document.querySelector('.actions');

ActionsArr.forEach( ({ date, src, text }) => {
  console.log(src);
  new ActionCard(src, date, text).render(selector);
});


document.querySelector('.js-getback-btn').onclick = function() {
    window.location.href = 'index.html';
  };