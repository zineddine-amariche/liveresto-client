import React, { useEffect, useRef } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS } from "../../../../../Components/Styles/theme";
import Icon from "../../../../../Assets/Images/🔍.png";
import { useDispatch, useSelector } from "react-redux";
import { GET_ADRESSES } from "../../../../../Redux/Types/Addresses";
const GooglePlacessUpdate = ({ setLocation, Location, item, index }) => {
  const ref = useRef();
    // console.log("indexindexindexindexindexindexindexindexindex", index);

  useEffect(() => {
    ref.current?.setAddressText(item);
  }, []);

  const Adresses = useSelector((state) => state.Adresses);
  const { AllAddresses } = Adresses;
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        width: "100%",
        paddingBottom: 20,
        paddingHorizontal: 1,
      }}
    >
      <View style={{ position: "absolute", top: 15, zIndex: 100, left: 10 }}>
        <Image source={Icon} />
      </View>
      <GooglePlacesAutocomplete
        numberOfLines={1}
        minLength={2}
        autoFocus={false}
        returnKeyType={"default"}
        fetchDetails={true}
        styles={{
          textInputContainer: {
            backgroundColor: "#fff",
            alignItems: "center",
            borderRadius: 5,
            paddingTop: 4,
            shadowColor: "#000",
            shadowOffset: {
              width: 10,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            paddingLeft: 30,
          },
          textInput: {
            height: 38,
            color: COLORS.Vert1,
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        placeholder="Enter Location"
        onPress={(data, details = null) => {
          let itemsCopy = [...AllAddresses];
          itemsCopy.splice(index, 1);
          dispatch({ type: GET_ADRESSES, payload: itemsCopy });
          setLocation({
            ...Location,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            error: null,
          });
        }}
        query={{
          key: "AIzaSyBKT1l6yPzHwcMyz5kz29DBdyiQ3jV8CyU",
          language: "fr",
        }}
        ref={ref}
        enablePoweredByContainer={false}
      />
    </View>
  );
};

export default GooglePlacessUpdate;
