const showMenu = (menu, firstLine, secondLine, container) => {
    document.addEventListener('click', (event) => {

        if (!event.target.closest('.js-menu')) {
            firstLine.classList.remove('active');
            secondLine.classList.remove('active-line');
            container.classList.remove('active-wrapper');
            menu.classList.remove('active-burger-menu');
        }

        if (event.target.closest('.js-menu-items')) {
            firstLine.classList.add('active');
            secondLine.classList.add('active-line');
            container.classList.add('active-wrapper');
            menu.classList.add('active-burger-menu');
        }

    });

    menu.addEventListener('click', () => {
            firstLine.classList.toggle('active');
            secondLine.classList.toggle('active-line');
            menu.classList.toggle('active-burger-menu');
            container.classList.toggle('active-wrapper');

    });
};

export default showMenu;