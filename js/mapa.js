function initialize() {
    var marcadores = [
      ['León', 42.603, -5.577],
      ['Salamanca', 40.963, -5.669],
      ['Zamora', 41.503, -5.744]
    ];
    var map = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 7,
      center: new google.maps.LatLng(41.503, -5.744),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < marcadores.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
        map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(marcadores[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
  google.maps.event.addDomListener(window, 'load', initialize);
<script async defer
       src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBZVh8517nja7w4ThVzXq_ljLriX5ap50&callback=initMap">
       </script>