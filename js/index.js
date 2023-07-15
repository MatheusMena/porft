const navToggle = document.querySelector('.nav-toggle'); // seleciona o botao

const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); // adiciona o evento de click , e muda a classe ao clicar
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); // para quando clicar em um dos links do hamburguer fechar o togle
    })
})