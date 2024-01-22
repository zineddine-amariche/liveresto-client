import React, { useEffect, useRef } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS } from "../../../../../Components/Styles/theme";
import Icon from "../../../../../Assets/Images/🔍.png";
const GooglePlacesInput = ({ setLocation, Location, item, pos }) => {
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
          // 'details' is provided when fetchDetails = true
          // console.log("search", data, details);
          // console.log("geometry lat", details.geometry.location.lat);
          // console.log("geometry lng", details.geometry.location.lng);
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
        enablePoweredByContainer={false}
      />
    </View>
  );
};

export default GooglePlacesInput;
