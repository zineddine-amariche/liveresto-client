import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SelectItems from "../../../../../../../Components/SelectPiker";
import DropDown from "../../../../../../../Components/SelectPiker/DropDown";

const Form = ({
  errors,
  adrress,
  setFieldValue,
  AllAddresses,
  setLocation,
  Location,
  background,
  hasData,
  selected,
  onSelect,
  address2,
  name,
  onBlur,
  touched
}) => {

  return (
    <View
      style={{
        width: "100%",
        marginBottom: 10,
        
      }}
    >
      <DropDown
        data={AllAddresses}
        setFieldValue={setFieldValue}
        name={name}
        adrress={adrress}
        errors={errors}
        label={"Adresse de livraison"}
        setLocation={setLocation}
        onSelect={onSelect}
        value={selected}
        Location={Location}
        background={background}
        onBlur={onBlur}
        touched={touched}
        hasData
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
