// Современный скрипт управления бургер-меню
class BurgerMenu {
    constructor() {
        this.burgerButton = document.querySelector('.header__burger');
        this.burgerMenu = document.querySelector('.burger-menu');
        this.closeButton = document.querySelector('.burger-menu__close');
        this.menuLinks = document.querySelectorAll('.burger-menu__link');
        this.body = document.body;

        this.init();
    }

    init() {
        if (!this.burgerButton || !this.burgerMenu) {
            console.warn('Burger menu elements not found');
            return;
        }

        this.bindEvents();
    }

    bindEvents() {
        // Открытие меню
        this.burgerButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.openMenu();
        });

        // Закрытие по кнопке close
        this.closeButton?.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeMenu();
        });

        // Закрытие по клику на ссылки
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen()) {
                this.closeMenu();
            }
        });

        // Закрытие по клику вне меню (опционально)
        this.burgerMenu.addEventListener('click', (e) => {
            if (e.target === this.burgerMenu) {
                this.closeMenu();
            }
        });
    }

    openMenu() {
        this.burgerMenu.classList.add('burger-menu--open');
        this.body.style.overflow = 'hidden'; // Блокируем скролл

        // Фокус на первой ссылке для доступности
        const firstLink = this.burgerMenu.querySelector('.burger-menu__link');
        firstLink?.focus();
    }

    closeMenu() {
        this.burgerMenu.classList.remove('burger-menu--open');
        this.body.style.overflow = ''; // Возвращаем скролл

        // Возвращаем фокус на кнопку бургера
        this.burgerButton.focus();
    }

    isMenuOpen() {
        return this.burgerMenu.classList.contains('burger-menu--open');
    }

    // Публичные методы для внешнего управления
    toggle() {
        this.isMenuOpen() ? this.closeMenu() : this.openMenu();
    }
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = new BurgerMenu();

    // Делаем доступным глобально (опционально)
    window.burgerMenu = burgerMenu;
});

document.addEventListener('DOMContentLoaded', () => {
    let searchButtons = document.querySelectorAll('[data-btn="search"]');
    let searchModal = document.querySelector(".search");
    let searchClose = document.querySelector('.search__button');

    searchButtons.forEach(searchButton => {
        searchButton.addEventListener('click', (e) => {
            searchModal.classList.toggle('is-open');
        })
    })

    searchClose.addEventListener('click', (e) => {
        searchModal.classList.toggle('is-open');
    })

})

