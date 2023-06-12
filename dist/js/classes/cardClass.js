class ActionCard {
    constructor(src, date, text) {
        this.src = src;
        this.date = date;
        this.text = text;
        this.container = document.createElement("div");
        this.prevBtn = document.createElement("button");
        this.nextBtn = document.createElement("button");
        this.loadMore = document.createElement("button");
    }

    createElement() {

        this.container.className = "actions__card-container";

        const html = `
        <img class="actions__card-image" src="${this.src}" alt="Pomoc humanitarna">

        <div class="actions__card-text">
        <p>${this.date}</p>
        <p>
            ${this.text}
        </p>
        </div>
        `;

        this.container.innerHTML = html;

        this.prevBtn.className = "actions__previouse-btn";
        this.prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-240 -960 960 900">
        <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" fill="#FFDF6B" /></svg>`;

        this.nextBtn.className = "actions__next-btn";
        this.nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" fill="#FFDF6B" /></svg>`;

        this.loadMore.className = "actions__load-more-btn";
        this.loadMore.innerText = "Pokaż więcej";

        this.container.prepend(this.prevBtn);
        this.container.append(this.loadMore,  this.nextBtn);

    }

    render (selector) {
        this.createElement();
        selector.append(this.container);
    }
}

export default ActionCard;
