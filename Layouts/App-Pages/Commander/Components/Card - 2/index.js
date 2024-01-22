import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
// import Geolocation from "@react-native-community/geolocation";
import Geolocation from 'react-native-geolocation-service';
import { FraisTxt, H7 } from "../../../../../Components/utils/TextComponents";
import HView from "../../../../../Components/View/HView";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Form from "./Components/Form";
import { useSelector } from "react-redux";
import DropDown from "../../../../../Components/SelectPiker/DropDown";
import { COLORS } from "../../../../../Components/Styles/theme";
import ContainerT1 from "./Components/Container-Title";
const CardA2 = ({ setFieldValue, errors, Nav, adrress, touched, onBlur }) => {
  const Adresses = useSelector((state) => state.Adresses);
  const { AllAddresses } = Adresses;
  let _map = React.useRef(null);
  let regionInitial = {
    latitude: 36.75089,
    longitude: 5.056733,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    error: null,
  };
  const [Location, setLocation] = useState(regionInitial);
  const config = {
    enableHighAccuracy: false,
    timeout: 2000,
    maximumAge: 3600000,
  };

  useEffect(() => {
    // if (Platform.OS === "android") {
    //   requestPermission();
    // } else {
    _getCurrentLocation();
    // }
  }, []);

  const _getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        let lat = info.coords.latitude;
        let long = info.coords.longitude;
        if (lat && long) {
          // setloader(false);
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

  const [selected, setSelected] = useState(null);

  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <View style={styles.container}>
      <ContainerT1 Nav={Nav} />
      {AllAddresses.length ? (
        <>
          <Form
            setFieldValue={setFieldValue}
            errors={errors.address}
            AllAddresses={AllAddresses}
            setLocation={setLocation}
            adrress={adrress}
            Location={Location}
            background={AllAddresses.length ? true : false}
            hasData={true}
            selected={selected}
            onSelect={onSelect}
            name={"address"}
            touched={touched}
            onBlur={onBlur}
          />
          {selected && (
            <View style={styles.MapViewBox}>
              <MapView
                ref={(ref) => (_map = ref)}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsPointsOfInterest={true}
                followsUserLocation={true}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={Location}
                // onPoiClick={(e) => {
                //   setLocation({
                //     ...Location,
                //     latitude: e.nativeEvent.coordinate.latitude,
                //     longitude: e.nativeEvent.coordinate.longitude,
                //     error: null,
                //   });
                // }}
                // onPress={(e) => {
                //   setLocation({
                //     ...Location,
                //     latitude: e.nativeEvent.coordinate.latitude,
                //     longitude: e.nativeEvent.coordinate.longitude,
                //     error: null,
                //   });
                // }}
              >
                <Marker
                  coordinate={Location}
                  draggable={true}
                  onDragStart={(e) => {
                    // console.log(`e1`, e.nativeEvent.coordinate);
                  }}
                  onDragEnd={(e) => {
                    // console.log(`e2`, e.nativeEvent.coordinate);
                    // setLocation({
                    //   ...Location,
                    //   latitude: e.nativeEvent.coordinate.latitude,
                    //   longitude: e.nativeEvent.coordinate.longitude,
                    //   error: null,
                    // });
                  }}
                />
              </MapView>
            </View>
          )}
        </>
      ) : (
        <>
          <DropDown
            data={AllAddresses}
            name={"address"}
            adrress={adrress}
            errors={errors.address}
            label={"Adresse de livraison"}
            setLocation={setLocation}
            Location={Location}
            hasData={false}
          />
        </>
      )}
    </View>
  );
};

export default CardA2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Gris,
    flex: 1,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 35,
    paddingVertical: 20,
  },

  Location: {
    alignSelf: "center",
    width: "100%",
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "#fff",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  MapViewBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: 5,
    overflow: "hidden",
    width: "100%",
    height: 200,
    flex: 1,
    elevation: 3,
    marginVertical: 0.1,
  },
});
