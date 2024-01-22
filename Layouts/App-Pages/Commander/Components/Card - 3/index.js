import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { H7, Txt } from "../../../../../Components/utils/TextComponents";

import HView from "../../../../../Components/View/HView";
import { COLORS } from "../../../../../Components/Styles/theme";
import { radioButtonsDataAdrs } from "../../../MesInformations/data";
import RadioCheck from "../../../../../Components/RadioCheck/useRadiochek";
import DropDown from "../../../../../Components/SelectPiker/DropDown";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSelector } from "react-redux";
// import Geolocation from "@react-native-community/geolocation";
import Geolocation from 'react-native-geolocation-service';
import Form from "../Card - 2/Components/Form";


const CardA3 = ({
  setFieldValue,
  errors,
  Nav,
  adrress2,
  currentSelectedItem,
  HandelChangeValue,
  address2,
  onBlur,
  touched
}) => {
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

  useEffect(() => {
    if(currentSelectedItem === 0){
      setFieldValue('address2' , '')
      setSelected(null)
    }
  }, [currentSelectedItem]);

  return (
    <View style={styles.container}>
      <H7>Adresse de facturation identique ?</H7>

      <HView spaceBetween>
        <HView style={styles.conatinerOne}>
          {radioButtonsDataAdrs.map((item, index) => {
            let isChecked = currentSelectedItem === index ? true : false;

            return (
              <TouchableOpacity
                onPress={() => {
                  HandelChangeValue(index, item.value);
                  // setFieldValue("gender", item.value);
                }}
                key={index}
              >
                <View style={styles.BoxIcon}>
                  <RadioCheck
                    checked={isChecked}
                    item={item}
                    index={index}
                    HandelChange={HandelChangeValue}
                  />
                  <Txt fontSize={18}>{item.label}</Txt>
                </View>
              </TouchableOpacity>
            );
          })}
        </HView>
        {currentSelectedItem === 1 && (
          <TouchableOpacity onPress={() => Nav("MesAdresses")}>
            <Txt color={COLORS.Vert3}>+ Ajouter</Txt>
          </TouchableOpacity>
        )}
      </HView>
      {currentSelectedItem === 1 && (
        <>
          {AllAddresses.length ? (
            <>
              <Form
                setFieldValue={setFieldValue}
                errors={errors.address2}
                AllAddresses={AllAddresses}
                setLocation={setLocation}
                adrress={address2}
                Location={Location}
                background={AllAddresses.length ? true : false}
                hasData={true}
                selected={selected}
                onSelect={onSelect}
                name={"address2"}
                onBlur={onBlur}
                touched={touched}
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
                  >
                    <Marker
                      coordinate={Location}
                      draggable={true}
                      onDragStart={(e) => {
                        // console.log(`e1`, e.nativeEvent.coordinate);
                      }}
                      onDragEnd={(e) => {
                        // console.log(`e2`, e.nativeEvent.coordinate);
                      }}
                    />
                  </MapView>
                </View>
              )}
            </>
          ) : (
            <DropDown
              data={AllAddresses}
              name={"address2"}
              adrress={adrress2}
              errors={errors?.adrress2}
              label={"Adresse de livraison"}
              setLocation={setLocation}
              Location={Location}
              hasData={false}
            />
          )}
        </>
      )}
    </View>
  );
};

export default CardA3;

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
  points: {
    marginVertical: 15,
  },
  BoxItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  Space: {
    height: 20,
  },
  conatinerOne: {
    paddingVertical: 20,
  },

  T1: {
    color: COLORS.Noir,
    fontWeight: "700",
  },
  T2: {
    color: COLORS.Noir,
  },
  space: {
    height: 20,
  },

  List: {},
  Item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Left: {},
  right: {},
  BoxIcon: {
    flexDirection: "row",
    alignItems: "center",
    width: 90,
    marginRight: 10,
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
