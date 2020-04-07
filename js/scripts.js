$(document).ready(function() {
    //Clic inicio
    $("#inicio").click(function() {
        $("#divInicio").show();
        $("#divLecturas").hide();
        $("#divMultimedia").hide();
        $("#divActividades").hide();
        $("#divAutores").hide();

        $("#inicio").removeClass("nav-link").addClass("nav-link active");
    });

    //Clic lecturas
    $("#lecturas").click(function() {
        $("#divInicio").hide();
        $("#divLecturas").show();
        $("#divMultimedia").hide();
        $("#divActividades").hide();
        $("#divAutores").hide();

        $("#lecturas").removeClass("nav-link").addClass("nav-link active");
    });

    //Clic multimedia
    $("#multimedia").click(function() {
        $("#divInicio").hide();
        $("#divLecturas").hide();
        $("#divMultimedia").show();
        $("#divActividades").hide();
        $("#divAutores").hide();

        $("#multimedia").removeClass("nav-link").addClass("nav-link active");
    });

    //Clic actividades
    $("#actividades").click(function() {
        $("#divInicio").hide();
        $("#divLecturas").hide();
        $("#divMultimedia").hide();
        $("#divActividades").show();
        $("#divAutores").hide();

        $("#actividades").removeClass("nav-link").addClass("nav-link active");
    });

    //Clic autores
    $("#autores").click(function() {
        $("#divInicio").hide();
        $("#divLecturas").hide();
        $("#divMultimedia").hide();
        $("#divActividades").hide();
        $("#divAutores").show();

        $("#autores").removeClass("nav-link").addClass("nav-link active");
    });
});