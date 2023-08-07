import { styles } from './style';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import * as Location from 'expo-location';



function Maps({ navigation, route }) {


  const { categoryId, backgroundImage, name, latitude, longitude } = route.params;

  const [origin, setOrigin] = useState({
    latitude: -34.635744,
    longitude: -58.365402,
  });

  const [destinationRoma, setDestinationRoma] = useState({
    latitude: latitude,
    longitude: longitude,
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocationPermission();
  }, []);

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    console.log(current);

    setOrigin(current);
  }
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
  }

  const [destination, setDestination] = useState({
    latitude: 41.87635744,
    longitude: 12.52365402,
  });
  console.log(destination.latitude);

  const calcularDistanciaEntreDosCoordenadas = (lat1, lon1, lat2, lon2) => {
    // Convertir todas las coordenadas a radianes
    lat1 = gradosARadianes(lat1);
    lon1 = gradosARadianes(lon1);
    lat2 = gradosARadianes(lat2);
    lon2 = gradosARadianes(lon2);
    // Aplicar fórmula
    const RADIO_TIERRA_EN_KILOMETROS = 6371;
    let diferenciaEntreLongitudes = lon2 - lon1;
    let diferenciaEntreLatitudes = lat2 - lat1;
    let a =
      Math.pow(Math.sin(diferenciaEntreLatitudes / 2.0), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diferenciaEntreLongitudes / 2.0), 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return RADIO_TIERRA_EN_KILOMETROS * c;
  };

  const gradosARadianes = (grados) => {
    return (grados * Math.PI) / 180;
  };

  const distanciaEnKilometros = calcularDistanciaEntreDosCoordenadas(
    origin.latitude,
    origin.longitude,
    destination.latitude,
    destination.longitude
  );
  console.log(distanciaEnKilometros);

  return (
    <View style={styles.container}>
      <Image source={{ uri: backgroundImage }} resizeMode="cover" style={styles.image} />

      <Text style={styles.textMaps}>
        Lamentablemente estás a {Math.trunc(distanciaEnKilometros)} km de {name} ?
      </Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: destination.latitude,
          longitude: destination.longitude,
          latitudeDelta: 90,
          longitudeDelta: 280,
          minZoomLevel: 0,
        }}>
        <Marker coordinate={origin} />

        <Marker
          draggable={true}
          onDragEnd={(direction) => setDestinationRoma(direction.nativeEvent.coordinate)}
          coordinate={destinationRoma}
        />

        <Polyline coordinates={[origin, destinationRoma]} strokeColor="#841584" strokeWidth={1} />
      </MapView>
    </View>
  );
}

export default Maps;
