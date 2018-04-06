import styles from './maps/styles';

function initMap(){

    const coords = {
      lat: 6.165076,
      lng: -75.629786 
    };

    let map = new google.maps.Map(document.getElementById('mapa'),{
        center: coords,
        zoom: 17,
        styles: styles
    });

    let marker = new google.maps.Marker({
        position: coords,
        map,
         title: 'OrbitX Dev House'
    })
}

initMap();