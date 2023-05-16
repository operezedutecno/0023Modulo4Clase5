import Electrodomestico from "./clases/Electrodomestico.js";

let listado = []


let boton = $("#btn-registrar1")
console.log(boton);

$(document).ready(function(){

    $(document).on("click","#btn-registrar", function(event) {
        event.preventDefault();
        let nombre = $("#txt-nombre").val()
        let color = $("#select-color").val()

        if(nombre == "") {
            return alert("Por favor ingresar el nombre del electrodoméstico")
        }

        if(color == "") {
            return alert("Por favor seleccionar el color del electrodoméstico")
        }

        let objElectrodomestico = new Electrodomestico(nombre, color)
        listado.push(objElectrodomestico)

        listarElectrodomesticos()
    })

    $(document).on("mouseenter","#listado tbody tr", function() {
        $(this).css({ "background" : "#FEF9E7", "color": "blue"})
    })

    $(document).on("mouseleave","#listado tbody tr", function() {
        $(this).css({ "background" : "white", "color": "black"})
    })

    function listarElectrodomesticos() {
        $("#listado tbody").html("")
        let contador = 0
        for (const electrodomestico of listado) {
            contador+=1
            $("#listado tbody").append(`
                <tr>
                    <td>${contador}</td>
                    <td>${electrodomestico.nombre}</td>
                    <td class="text-capitalize">${electrodomestico.color}</td>
                    <td>
                        <button class="btn btn-sm btn-danger">Eliminar</button>
                    </td>
                </tr>
            `)
        }
    }




})