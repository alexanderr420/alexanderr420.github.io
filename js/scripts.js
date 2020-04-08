$(document).ready(function() {
    var contador = '';
    $.get('contador.txt', function(data) {
        contador = parseFloat(data);
    });
    contador = contador + 1;
    //Clic inicio
    $("#inicio").click(function() {
        $(".contenido").hide();
        $("#divInicio").show();

        $(".nav-link").removeClass("nav-link active").addClass("nav-link");
        $("#inicio").removeClass("nav-link").addClass("nav-link active");

    });

    //Clic lecturas
    $("#lecturas").click(function() {
        $(".contenido").hide();
        $("#divLecturas").show();

        $(".nav-link").removeClass("nav-link active").addClass("nav-link");
        $("#lecturas").removeClass("nav-link").addClass("nav-link active");

    });

    //Clic multimedia
    $("#multimedia").click(function() {
        $(".contenido").hide();
        $("#divMultimedia").show();

        $(".nav-link").removeClass("nav-link active").addClass("nav-link");
        $("#multimedia").removeClass("nav-link").addClass("nav-link active");

    });

    //Clic actividades
    $("#actividades").click(function() {
        $(".contenido").hide();
        $("#divActividades").show();

        $(".nav-link").removeClass("nav-link active").addClass("nav-link");
        $("#actividades").removeClass("nav-link").addClass("nav-link active");

    });

    //Clic autores
    $("#autores").click(function() {
        $(".contenido").hide();
        $("#divAutores").show();

        $(".nav-link").removeClass("nav-link active").addClass("nav-link");
        $("#autores").removeClass("nav-link").addClass("nav-link active");

    });
});