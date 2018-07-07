function cambiar_fuente(){
        var i
        for (i=0;i<document.listadiseño.electionText.length;i++){
           if (document.listadiseño.electionText[i].checked)
              break;
        }
        document.fuentes = document.listadiseño.electionText[i].value;

        if (document.fuentes = document.listadiseño.electionText.ubuntu){
            card__head--container.style.font-family="OpenSans";
            card__foot--text.style.font-family="OpenSans";
        } else if (document.fuentes = document.listadiseño.electionText.comicsans){
            card__head--container.style.font-family="Comic Sans";
            card__foot--text.style.font-family="Comic Sant";
        } else if (document.fuentes = document.listadiseño.electionText.montserrat){
            card__head--container.style.font-family="Montserrat";
            card__foot--text.style.font-family="Montserrat";
        }
}

function cambiar_color(){
    var i
    for (i=0;i<document.listadiseño.electionColor.length;i++){
       if (document.listadiseño.electionColor[i].checked)
          break;
    }
    document.colores = document.listadiseño.electionColor[i].value;

    if (document.fuentes = document.listadiseño.electionColor.azul){
        card__foot--social.style.border-bottom="$dirty-blue";
        card__head--container.style.color="$dark-green-blue";
        card__foot--text.style.color="$dark-green-blue";
        card__foot--icon.style.color="$hospital-green";
        card__foot--box.style.background-color="$hospital-green";
    } else if (document.fuentes = document.listadiseño.electionColor.rojo){
        card__foot--social.style.border-bottom="$passion-red";
        card__head--container.style.color="$granate";
        card__foot--text.style.color="$granate";
        card__foot--icon.style.color="$butan-orange";
        card__foot--box.style.background-color="$butan-orange";
    } else if (document.fuentes = document.listadiseño.electionColor.gris){
        card__foot--social.style.border-bottom="$blue-grey-medium";
        card__head--container.style.color="$blue-grey-dark";
        card__foot--text.style.color="$blue-grey-dark";
        card__foot--icon.style.color="$blue-grey-clear";
        card__foot--box.style.background-color="$blue-grey-clear";
}
