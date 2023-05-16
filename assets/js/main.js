import Electrodomestico from "./clases/Electrodomestico.js";

let listado = []


let boton = $("#btn-registrar1")
// console.log(boton);

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

    $(document).on("click",".btn-eliminar", function() {
        if(confirm("¿Seguro que desea eliminar?")){
            let indice = $(this).attr('id')
            listado.splice(indice,1)
            listarElectrodomesticos()
        }
        
    })

    function listarElectrodomesticos() {
        $("#listado tbody").html("")
        $("#total-registros").text(listado.length)
        // $("#total-registros").html(`<span class="text-danger">${listado.length}</span>`)
        let contador = 0
        for (const electrodomestico of listado) {
            contador+=1
            $("#listado tbody").append(`
                <tr>
                    <td>${contador}</td>
                    <td>${electrodomestico.nombre}</td>
                    <td class="text-capitalize">${electrodomestico.color}</td>
                    <td>
                        <button id="${contador-1}" class="btn btn-sm btn-danger btn-eliminar">Eliminar</button>
                    </td>
                </tr>
            `)
        }
    }




})