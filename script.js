const app = (() => {
    const _shareButton = document.querySelector(".container__card__content__about__share__button");
    const _shareMenu = document.querySelector(".container__card__content__about__share__menu");

    let _activeState = false;

    _shareButton.addEventListener("click", (event) => {

        toggleActiveState();

        if (_activeState) {
            activeShareButton();
            showShareMenu();
        } else {
            deactiveShareButton();
            hideShareMenu();
        }
    })

    function toggleActiveState() {
        _activeState = !_activeState;
    }

    function activeShareButton() {
        _shareButton.classList.add("active");
    }

    function deactiveShareButton() {
        _shareButton.classList.remove("active");
    }

    function showShareMenu() {
        _shareMenu.classList.remove("hidden");
    }

    function hideShareMenu() {
        _shareMenu.classList.add("hidden");
    }


})();