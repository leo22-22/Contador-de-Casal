function atualizarRelogio() {
    const dataInicial = new Date("2022-03-24 11:30:00");  // Data inicial
    const agora = new Date();  // Data e hora atuais
    const diferencaTempo = agora - dataInicial;  // Diferença em milissegundos

    // Cálculo de anos, meses e semanas
    const anos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 30.44)) % 12;

    // Total de dias
    const totalDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    
    // Dias restantes após subtrair anos e meses
    const diasCorretos = totalDias - (anos * 365) - (meses * 30.44);

    // Cálculo das horas, minutos e segundos
    const horasTotais = Math.floor(diferencaTempo / (1000 * 60 * 60)) % 24;
    const minutosTotais = Math.floor(diferencaTempo / (1000 * 60)) % 60;
    const segundosTotais = Math.floor(diferencaTempo / 1000) % 60;

    // Totais acumulados
    const totalSegundos = Math.floor(diferencaTempo / 1000);
    const totalMinutos = Math.floor(diferencaTempo / (1000 * 60));
    const totalHoras = Math.floor(diferencaTempo / (1000 * 60 * 60));
    const totalMeses = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 30.44));

    // Adicionando zero à esquerda se necessário
    const horas = horasTotais < 10 ? '0' + horasTotais : horasTotais;
    const minutos = minutosTotais < 10 ? '0' + minutosTotais : minutosTotais;
    const segundos = segundosTotais < 10 ? '0' + segundosTotais : segundosTotais;

    // Atualiza os elementos no HTML
    document.getElementById('anos').textContent = `${anos} anos, `;
    document.getElementById('meses').textContent = `${meses} meses, `;
    document.getElementById('dias').textContent = `${Math.round(diasCorretos)} dias, `;
    document.getElementById('horas').textContent = `${horas} horas, `;
    document.getElementById('minutos').textContent = `${minutos} minutos e `;
    document.getElementById('segundos').textContent = `${segundos} segundos`;

    // Atualiza os contadores totais no HTML

}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);



let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou retroceder slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para ir para um slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Função para exibir o slide atual
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Avançar slides automaticamente a cada 5 segundos
setInterval(() => {
    plusSlides(1);
}, 3000);