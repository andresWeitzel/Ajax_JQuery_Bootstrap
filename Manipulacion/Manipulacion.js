$(document).ready(function() {


    var incluirParrafo = $("<p id='parrafoAgregado'>Parrafo Agregado</p>");
    var incluirLista = $("<ul id='listaAgregada'><li>Lista1</li><li>Lista2</li></ul>");

    $("button#agregar").click(function() {
        $("body").append(incluirParrafo);
        $("body").append(incluirLista);
    });

    $("button#modificar").click(function() {
        $("p#parrafoAgregado,ul#listaAgregada > li")
            .css({
                color: "black",
                background: "#ccf0f9"
            });


    });

    $("button#remover").click(function() {
        $("p").remove('#parrafoAgregado');
        $("ul").remove('#listaAgregada');
    });



});