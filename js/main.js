$(document).ready(function(){

console.log("script iniciado");

    //----Slider

    if (window.location.href.indexOf('index') > -1) {

        $('.bxslider').bxSlider({
            captions: true,
            mode:'horizontal',
            speed: 800,
            slideMargin: 0,
            ticker: false,
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true,
            slideWidth: 1900,
            responsive: true,
            adaptiveHeight: true,
            touchEnabled: true
        });

    //----Enlaces con scrollTop

        $('#abajo').click(function(){ //Id del elemento cliqueable
            $('html, body').animate({scrollTop:"840vh"}, 'slow');
            return false;
        });

        $('#f_arriba').click(function(){ //Id del elemento cliqueable
            $('html, body').animate({scrollTop:0}, 'slow');
            return false;
        });

           $(window).scroll(function(event) {

                var scrollTop = $(window).scrollTop();

                if (scrollTop < 800) {
                    $('#f_arriba').css("visibility", "hidden");
                } else{
                        $('#f_arriba').css("visibility", "visible");
                    }


            }); 

    };


    // Ajuates pagina productos 

    if (window.location.href.indexOf('productos') > -1) {



    // Pagination.js 

        //Filtro en los selectores
    
        var path = 0;
      

        $(".no-uno").click(function(){

            console.log("heloooooo");

            path = 1;
            console.log(path)

            $(".estilos-selector").removeClass("selector-productos");
            $(this).addClass("selector-productos");
        });

        $(".no-dos").click(function(){

            console.log("heloooooo");

            path = 2;
            console.log(path)

            $(".estilos-selector").removeClass("selector-productos");
            $(this).addClass("selector-productos");

        });


        //Funcion que devuelve datos de la API en elementos HTML

        function dataLlamada(paramRuta){

            var ruta = paramRuta;

            $(function() {
        (function(name) {
        
        var container = $('#pagination-' + name);

            function beforeCarga(){
                        var loader = Rocket.loader({
                        target: '.cont-list-productos',
                        body: 'Loading Something',
                        append: 'true'
                        })
                    };
     
        var options = {

            // Peticion ajax con get a la API en azure

            dataSource: function(done) {
                
                $.ajax({
                    
                    type: 'GET',
                    url: ruta,
                
                    success: function(response) {
                        done(response);
                        
                        $(cantArticulos).text(response.length + " " + "productos");
                    

                        
                     // var aa = reponse.length;
                     // console.log("el valor de response" + aa)
                    },

                     beforeSend: function(){
              
        
                        var añadir = '<div>' + beforeCarga() + '</div>';
                        $("cont-list-productos").append(añadir);

                     }             
                    
                });
            },

            // Insercion de los datos obtenidos de la API 

            callback: function (response, pagination) {
                
          console.log("response en la funcion" + response.length)
                
                window.console && console.log(response, pagination);
                var dataHtml = '<div class="row">';
                    
                $.each(response, function (index, item) {

                    dataHtml += '<div class="col-4 cont-card-productos"><img src=' + item.id + ' class="img-fluid"><span class="titulo-card-productos">' 
                                + item.titulo +  '</span><span class="descripcion-card-productos">' + item.descripcion + '</span> </div>';

                                
                });
                    dataHtml += '</div>';
                    container.prev().html(dataHtml);

                    //Ajuste de alto de la pagina segun la cantidad de productos


                    var altoPagina = response.length;
                    console.log(response.length);

                    function scrollUp(){
                        window.scrollTo(0, 0);
                    }

                    if (altoPagina >= 9) {

                         $("footer").css("margin-top", "72vh");
                         scrollUp();
                         console.log("dentro de la funcion 1");
                    } else if (altoPagina >= 6){

                            $("footer").css("margin-top", "55vh")
                            scrollUp();
                            console.log("dentro de la funcion 2");
                        } else if (altoPagina >= 4){

                                $("footer").css("margin-top", "25vh")
                                scrollUp();
                                console.log("dentro de la funcion 3");
                            } else if (altoPagina >= 1){

                                    $("footer").css("margin-top", "0")
                                    scrollUp();
                                    console.log("dentro de la funcion 3");
                            }   

                    // $(".J-paginationjs-next").click(function(){
                    //      $('html, body').animate({scrollTop:0}, '100');
                    //     return false;
                    // });

                     

            },

           

            pageSize: 9,

        };

            container.pagination(options);


        })('productos');

    }) 

}

    // Funcion para escoger los productos con el boton.

    var funct = function(value){

        hola = value;


            //  console.log(path + "este es el valor de path");
            if (hola === 1) {

                    console.log("entro en la condicion" + hola)
                    dataLlamada('https://dataprocoal.azurewebsites.net/visagras?pageSize=5');
                    hola = 0;
                }   else  if (hola === 2){

                        console.log("Si sirveeee la condion");
                        dataLlamada('https://dataprocoal.azurewebsites.net/posts?pageSize=5');
                        hola = 0;
                    }   else {

                        console.log("Si sirveeee la condion");
                        }
 
        }

        $("#button-productos").click(function(){ 

            $("#contenedor-invitacion-productos").remove();
            return funct(path);
        });







    // Selectable JQuery UI

    //$( function() {
        //$( "#selectable" ).selectable();
        
    //});

   

};

    //Scipts pagina nosotros

    if (window.location.href.indexOf('nosotros') > -1) {

        $("footer").css("margin-top", "13vh")

        $('#f_arriba').click(function(){ //Id del elemento cliqueable
            $('html, body').animate({scrollTop:0}, 'slow');
            return false;
        });

           $(window).scroll(function(event) {

                var scrollTop = $(window).scrollTop();

                if (scrollTop < 800) {
                    $('#f_arriba').css("visibility", "hidden");
                } else{
                        $('#f_arriba').css("visibility", "visible");
                    }


            }); 
    };




    // documentacion
    // https://www.javascripture.com/FileReader
    // https://developer.mozilla.org/es/docs/Web/API/FileReader
})





