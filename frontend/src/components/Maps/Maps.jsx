import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '460px',
};

const center = {
  lat: 19.197896929336988,
  lng:72.82721447987888
};

const points = [
    {
        lat: 19.197896929336988,
        lng: 72.82721447987888
    },
    {
        lat: 19.182755,
        lng: 72.840157
    },
]

function MyComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD_8C0FMrbfPsWDG0ngAJtwBJM80DQbuAI"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) return <div>Error loading maps</div>;

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options= {{
        streetViewControl: false,
        mapTypeControl: false
      }}
    >
        {
            points.map((point, i)=> 
                (< MarkerF position={point}></MarkerF>)
            )
        }
        
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <div>Loading...</div>;
}

export default React.memo(MyComponent);