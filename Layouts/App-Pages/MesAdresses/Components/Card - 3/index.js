import { Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./Components/styles";
import { H4, H5, Txt } from "../../../../../Components/utils/TextComponents";

import ItemAdresse from "../itemAdresse";
import InputSearch from "../../../../../Components/Inputs/Input - 1 (search)";
import { useSelector } from "react-redux";

import { SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

import { COLORS } from "../../../../../Components/Styles/theme";
import { GET_ADRESSES } from "../../../../../Redux/Types/Addresses";
import ModalPrimary from "../../../../../Components/Models/ModelPrimary";
import HView from "../../../../../Components/View/HView";
import { PrimaryButton, SecondaryButton } from "../../../../../Components/utils/Buttons";

import imgVertDroit from '../../../../../Assets/Images/qemu-system-x86_64_RYczx86R0Q.png'
import { disableInfo } from "../../../../../Redux/Actions/Adresses";
const CardA3 = ({ Nav, simultaneousHandlers,navigation }) => {
  const Adresses = useSelector((state) => state.Adresses);
  const { AllAddresses,showInfo } = Adresses;
  let item = "true";
  const dispatch = useDispatch();

  const onDismiss = (ind) => {
    let itemsCopy = [...AllAddresses];
    itemsCopy.splice(ind, 1); // to delete one item from the new array
    dispatch({ type: GET_ADRESSES, payload: itemsCopy });
  };


  const [ShowModal, setShowModal] = useState(showInfo);

  const onDissmis = () => {
    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <InputSearch
        onPress={() => Nav("MyLocation", item)}
        text={"Saisir une nouvelle adresse"}
      />
      <View style={styles.Space} />
      <H4>Mes adresses entregistrées</H4>
      {AllAddresses.length !== 0 ? (
        <SwipeListView
          data={AllAddresses}
          renderItem={(data, rowMap) => (
            <View key={data.index}>
              <ItemAdresse
                item={data.item}
                Divider={AllAddresses.length - 1 == data.index ? false : true}
                Nav={Nav}
                simultaneousHandlers={simultaneousHandlers}
                index={data.index}
                navigation={navigation}
              />
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                onPress={() => {
                  onDismiss(data.index);

                  // console.log(data.index);
                }}
              >
                <MaterialCommunityIcons
                  name="delete-forever"
                  size={30}
                  color={COLORS.Rouge}
                />
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={5}
        />
      ) : (
        <View style={{ paddingVertical: 20 }}>
          <Txt>Il n'y a pas d'adresse entregistrées .</Txt>
        </View>
      )}


      <ModalPrimary visible={ShowModal} onDissmis={onDissmis}>
          <View style={styles.model}>
            <View style={{ padding:10}}>
            <H5 color={COLORS.Rouge}>Remarque :</H5>
            <Txt fontSize={17} style={styles.text}>
              Pour supprimer les address glisser vers la droite
            </Txt>

            </View>
            <Image source={imgVertDroit}  style={{ }} />
          </View>
          <HView style={styles.BoxBtn}>
          
            <PrimaryButton
              onPress={() => {
                // FixdelAllCarts(Carts, dispatch);
                onDissmis();
                disableInfo(dispatch)
              }}
              width={"25%"}
              style={{marginTop:6}}
            >
              OK
            </PrimaryButton>
          </HView>
        </ModalPrimary>
    </View>
  );
};

export default CardA3;


