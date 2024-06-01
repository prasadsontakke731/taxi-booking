import React from 'react';
import { Layer, Source } from 'react-map-gl';

const MapBoxRoute = (props: any) => {
  return (
    <Source
      type='geojson'
      data={{
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: props.coordinates },
      }}
    >
      <Layer
        type='line'
        layout={{ 'line-join': 'round', 'line-cap': 'square' }}
        paint={{ 'line-color': 'red', 'line-width': 4 }}
      />
    </Source>
  );
};

export default MapBoxRoute;
