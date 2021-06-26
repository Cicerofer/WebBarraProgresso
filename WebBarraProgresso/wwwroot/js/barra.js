var barraProgress = new Object();
barraProgress.porcentagem = 25;
barraProgress.carregaBarra = function () {

    if (barraProgress.porcentagem > 100)
        barraProgress.porcentagem = 0;
    $(".barra-progress").css("width", barraProgress.porcentagem + "%");

    $(".porcentagem-barra-progress").html(barraProgress.porcentagem + "%");


    barraProgress.porcentagem += 5;
    setTimeout(barraProgress.carregaBarra, 150);
}

$(function () {
    barraProgress.carregaBarra();
})