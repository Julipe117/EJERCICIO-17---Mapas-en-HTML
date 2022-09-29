function initMap(){
    const posicion1 = {
        lat: 37.526783,
        lng: -6.279038
    }
    const posicion2 = {
        lat: 37.380824,
        lng: -6.009261
    }
    const posicion3 = {
        lat: 43.466762, 
        lng: 11.880483
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    marker = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Lagos de Aznalcollar"
    })
    marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Triana"
    })
    marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Via Saracino"
    })
}