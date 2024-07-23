import { View, Dimensions } from 'react-native'
import React, {useRef, useState} from 'react'
import MapViewDirections from 'react-native-maps-directions'
import { API_KEY } from '../../Services/authorization'
import MapView from 'react-native-maps'

interface Props {
    orginCoordinates: {
        latitude: number,
        longitude: number,
    },
    destinationCoordinates: {
        lat: number,
        lng: number,
    }
}

const MapViewDirectionItem: React.FC<Props>= ({orginCoordinates, destinationCoordinates}) => {
    const mapRef = useRef<MapView>(null)

      const { width, height } = Dimensions.get('window');

  return (
    <MapViewDirections
          origin={orginCoordinates}
        //   waypoints={coordinates.length > 2 ? coordinates.slice(1, -1) : undefined}
          destination={{ latitude: destinationCoordinates.lat, longitude: destinationCoordinates.lng }}
          apikey={API_KEY}
          strokeWidth={3}
          strokeColor="blue"
          optimizeWaypoints
          onStart={(params) => {
            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
          }}
          onReady={(result) => {
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min.`);

            // Fit the map view to the route coordinates
            mapRef?.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: width / 20,
                bottom: height / 20,
                left: width / 20,
                top: height / 20,
              },
            });
          }}
          onError={(errorMessage) => {
            // Handle errors
          }}
        />
  )
}

export default MapViewDirectionItem