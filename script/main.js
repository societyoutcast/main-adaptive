let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();


menujs.onclick = function myFunction () {
    var x = document.getElementById('myTopnav');

    if (x.className === 'div-nav') {
        x.className += 'div-nav';
    } else {
        x.className = 'div-nav';
    }
}

menujs2.onclick = function myFunction () {
    var x = document.getElementById('myTopnav2');

    if (x.className === 'div-nav2') {
        x.className += 'div-nav2';
    } else {
        x.className = 'div-nav2';
    }
}