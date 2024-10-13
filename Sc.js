 // Initialize the platform object
 var platform = new H.service.Platform({
    'apikey': 'vhuh8tZ13db680ljmKdcJ-ywdHQEN9EpzNxJGcLf4xs'
  });

  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();

  // Instantiate (and display) the map
  var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
      zoom: 10,
      center: { lng: 100.303441, lat: 13.7250482 } 
    });

  // Create the default UI:
  const ui = H.ui.UI.createDefault(map, maptypes);

  // Enable the event system to capture user inputs
  var mapEvents = new H.mapevents.MapEvents(map);

  // Instantiate the default behavior (dragging, zooming, etc.)
  var behavior = new H.mapevents.Behavior(mapEvents);

  const zoomRectangle = new H.ui.ZoomRectangle({

  // Position the control on the map's viewport
  alignment: H.ui.LayoutAlignment.LEFT_BOTTOM
  });


  ui.addControl('rectangle', zoomRectangle);

  //Chanon Sahanon Edited: 10/10/24 19.08
  var markers = [];


  //add and remove markers
  function addMarker(coords) {
    var marker = new H.map.Marker(coords);

    //remove
    marker.addEventListener('tap', function() {
      map.removeObject(marker);
      markers = markers.filter(m => m !== marker);
    });

    map.addObject(marker);
    markers.push(marker);
  }


  var initialCoords = { lng: 100.303441, lat: 13.7250482 };
  addMarker(initialCoords);

  map.setCenter(initialCoords);

