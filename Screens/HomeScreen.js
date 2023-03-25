import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 53.2194,
          longitude:  6.5665,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 53.2194,
            longitude: 6.5665,
          }}
          title="Gas Station"
          description="Marker Description"
        >
            <Callout>
                <View style={styles.gasStationCallout}> 
                    <Text style={styles.gasStationTitle}>Gas Station</Text>
                    <Text style={styles.gasPricesText} >Diesel:</Text>
                    <Text style={styles.gasPricesText}>Euro95:</Text>
                    <Text style={styles.gasPricesText}>LPG:</Text>
                </View>
            </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
    gasStationTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    gasStationCallout: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    gasPricesText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },

});