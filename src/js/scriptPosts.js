import ActionsArr from "./data/actionsData.js";
import ActionCard from "./classes/ActionClass.js";

const selector = document.querySelector('.actions');
console.log(ActionsArr);

ActionsArr.forEach( ({ date, src, text }) => {
  new ActionCard(src, date, text).render(selector);
});


document.querySelector('.js-getback-btn').onclick = function() {
    window.location.href = 'index.html';
  };