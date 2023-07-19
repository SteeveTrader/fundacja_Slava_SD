class ActionCard {
    constructor(src, date, text) {
        this.src = src;
        this.date = date;
        this.text = text;
        this.container = document.createElement("div");
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
    }

    render (selector) {
        this.createElement();
        selector.append(this.container);
    }
}

export default ActionCard;
