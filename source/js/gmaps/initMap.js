export default function initMap() {
  window.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 61.28, lng: 73.28},
    zoom: 12,
    disableDefaultUI: true,
    scrollwheel: false
  });
  map.setOptions({styles: window.styles});
  let marker = new google.maps.Marker({
    position: {lat: 61.258031, lng: 73.385922},
    map: window.map,
    title: 'Это мой город!',
    icon: {
      url: 'assets/img/map_marker.png'
    }
  });
}