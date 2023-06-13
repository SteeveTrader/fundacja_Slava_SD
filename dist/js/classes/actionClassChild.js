import ActionCard from "./ActionClass.js";

export default class ActionCardChild extends ActionCard {
    constructor(src, date, text) {
        super(src, date, text);
        this.prevBtn = document.createElement("button");
        this.nextBtn = document.createElement("button");
        this.loadMore = document.createElement("button");
    }

    createElement() {
        super.createElement();

        this.prevBtn.className = "actions__previouse-btn";
        this.prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-240 -960 960 900">
        <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" fill="#FFDF6B" /></svg>`;

        this.nextBtn.className = "actions__next-btn";
        this.nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" fill="#FFDF6B" /></svg>`;

        this.loadMore.className = "actions__load-more-btn";
        this.loadMore.innerText = "Pokaż więcej";
        this.loadMore.onclick = function() {
            window.location.href = 'indexCardsPost.html';
          };


        this.container.prepend(this.prevBtn);
        this.container.append(this.loadMore,  this.nextBtn);
    }
}