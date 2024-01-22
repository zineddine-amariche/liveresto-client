import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geocoder from "react-native-geocoding";
// import Geolocation from "@react-native-community/geolocation";
import Geolocation from 'react-native-geolocation-service';
import { PrimaryButton } from "../../../Components/utils/Buttons";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import Spinner from "../../../Components/Spiner";
import MapView, { AnimatedRegion, Animated } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { GET_ADRESSES } from "../../../Redux/Types/Addresses";
import { Alert } from "react-native";
import GooglePlacesInput from "./Components/GooglePlacess";
import GooglePlacessUpdate from "./Components/GooglePlacessUpdate";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyLocation = ({ navigation, navigation: { goBack }, route }) => {
  const { item, index } = route.params;

  let _map = React.useRef(null);
  const [Value, setValue] = useState([]);
  const [loader, setloader] = useState(true);
  const Adresses = useSelector((state) => state.Adresses);
  const { AllAddresses } = Adresses;
  let regionInitial = new AnimatedRegion({
    latitude: 36.75089,
    longitude: 5.056733,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    error: null,
  });
  const [Location, setLocation] = useState(regionInitial);

  const Nav = (path) => {
    navigation.navigate(path);
  };

  const config = {
    enableHighAccuracy: false,
    timeout: 20000,
    maximumAge: 1000,
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      requestPermission();
    } else {
      _getCurrentLocation();
    }
  }, []);

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "MyMapApp needs access to your location",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        _getCurrentLocation();
        // console.log("Location permission granted");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const _getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        let lat = info.coords.latitude;
        let long = info.coords.longitude;
        if (lat && long) {
          setloader(false);
          setLocation({
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
        }
      },
      (error) => console.log("ERROR", error),
      config
    );
  };

  const dispatch = useDispatch();
  const getAdress = async (lat, lng) => {
    Geocoder.init("AIzaSyBKT1l6yPzHwcMyz5kz29DBdyiQ3jV8CyU", {
      language: "fr",
    });

    try {
      Geocoder.from({
        latitude: Location.latitude,
        longitude: Location.longitude,
      }).then((json) => {
        if (!json.results[0].address_components[5]) {
          Alert.alert(
            "L'opération a échoué",
            "cette adresse non valide essayer avec une autre"
          );
        } else {
          const isFound = AllAddresses.some((element) => {
            if (
              element.locality ===
              json.results[0].address_components[1].long_name
            ) {
              return true;
            }

            return false;
          });
            let itemsCopy = [...AllAddresses];

          if (isFound) {
            dispatch({ type: GET_ADRESSES, payload: itemsCopy });
          } else {
            // console.log('json.results[0]', json.results[0].geometry.location.lat)
            // console.log('json.results[0]', json.results[0].geometry.location.lng)
            dispatch({
              type: GET_ADRESSES,
              payload: [
                ...AllAddresses,
                {
                  coutry: json.results[0].address_components[5].long_name,
                  wiliaya: json.results[0].address_components[4].long_name,
                  locality: json.results[0].address_components[1].long_name,
                  number: json.results[0].address_components[0].long_name,
                  lat: json.results[0].geometry.location.lat,
                  lng: json.results[0].geometry.location.lng,
                },
              ],
            });
            AsyncStorage.setItem("Address", JSON.stringify([
              ...AllAddresses,
              {
                coutry: json.results[0].address_components[5].long_name,
                wiliaya: json.results[0].address_components[4].long_name,
                locality: json.results[0].address_components[1].long_name,
                number: json.results[0].address_components[0].long_name,
                lat: json.results[0].geometry.location.lat,
                lng: json.results[0].geometry.location.lng,
              },
            ]));
          }

          Nav("MesAdresses", Value);
        }
      });
    } catch (error) {
      console.alert("errrr", error);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Ma position"} goBack={goBack} />

      {loader ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Spinner />
        </View>
      ) : (
        <>
          <Animated
            ref={(ref) => (_map = ref)}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
            followsUserLocation={true}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={Location}
            onPoiClick={(e) => {
              setLocation({
                ...Location,
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                error: null,
              });
            }}
            onPress={(e) => {
              setLocation({
                ...Location,
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                error: null,
              });
            }}
          >
            <Marker
              coordinate={Location}
              draggable={true}
              onDragStart={(e) => {
                // console.log(`e1`, e.nativeEvent.coordinate);
              }}
              onDragEnd={(e) => {
                // console.log(`e2`, e.nativeEvent.coordinate);
                setLocation({
                  ...Location,
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                  error: null,
                });
              }}
            />
          </Animated>

          <View
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              bottom: 0,
              alignItems: "center",
              flex: 1,
              padding: 20,
              width: "100%",
            }}
          >
            {item === "true" ? (
              <GooglePlacesInput
                setLocation={setLocation}
                Location={Location}
              />
            ) : null}

            {item?.coutry ? (
              <GooglePlacessUpdate
                setLocation={setLocation}
                Location={Location}
                item={item?.coutry + ", " + item?.locality}
                index={index}
              />
            ) : null}
            <PrimaryButton
              width={"100%"}
              style={{ marginHorizontal: 2 }}
              onPress={() => getAdress(Location.latitude, Location.longitude)}
            >
              Confirmer
            </PrimaryButton>
          </View>
        </>
      )}
    </View>
  );
};

export default MyLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
