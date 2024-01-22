import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import CardA1 from "./Components/Card - 1";
import CardA2 from "./Components/Card - 2";
import CardA3 from "./Components/Card - 3";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../Components/utils/Buttons";
import { Formik } from "formik";
import { useForm } from "./Hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import CardA4 from "./Components/Card - 4";
import { COLORS } from "../../../Components/Styles/theme";
import ModalPrimary from "../../../Components/Models/ModelPrimary";
import HView from "../../../Components/View/HView";
import { H5, Txt } from "../../../Components/utils/TextComponents";
import { FixdelAllCarts } from "../../../Redux/Actions/panier/FixAddToCartAcions";
import Space from "../../../Components/Space";
import ToastMessages from "../../../Components/ToastMessages";
import { CLEAR_MESSAGE_ORDER } from "../../../Redux/Types/ValidationOrder";

const Commander = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path) => {
    navigation.navigate(path);
  };

  const Adresses = useSelector((state) => state.Adresses);
  const { AllAddresses } = Adresses;

  const {
    Schema1,
    Schema2,
    initialValues1,
    initialValues2,
    onSubmit,
  } = useForm();

  const [currentSelectedItem, setCurrentSelectedItem] = useState(0);

  const HandelChangeValue = (idx) => {
    setCurrentSelectedItem(idx);
  };

  let Schema = currentSelectedItem === 0 ? Schema1 : Schema2;
  let values = currentSelectedItem === 0 ? initialValues1 : initialValues2;
  const { restaurantSelected } = useSelector((state) => state.FixCarts);

  const { products } = useSelector((state) => state.ValidationOrder);
  const [ShowModal, setShowModal] = useState(false);

  const onDissmis = () => {
    setShowModal(false);
  };
  const onShow = () => {
    setShowModal(true);
  };
  const { bill, hotel } = useSelector((state) => state.ValidationOrder);
  const { loading,error } = useSelector((state) => state.CHeckValidationCommande);
  console.log('error', error)
  const produit = useSelector((state) => state.OrderObjet);
  // console.log("produit", produit);
  // console.log("hotel", hotel);
  // console.log("bill", bill);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch({ type: CLEAR_MESSAGE_ORDER });
        console.log("delete");
      }, 3000);
    }
  }, [error]);


  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Commande"} goBack={goBack} />
      {error && <ToastMessages type={"error"} error={"Échec de l'achat"} />}
      <Formik
        initialValues={values}
        validationSchema={Schema}
        onSubmit={(values) => {
          onSubmit(values,onShow);
          // formikAction.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
          setErrors,
          setFieldValue,
        }) => {
          const { adrress, address2 } = values;
          {
            /* console.log("errors", errors);
          console.log("values", values);
          console.log("touched", touched); */
          }
          return (
            <>
              <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.cardInfo}>
                  <CardA1 />
                  <CardA2
                    Nav={Nav}
                    errors={errors}
                    setFieldValue={setFieldValue}
                    adrress={adrress}
                    touched={touched}
                    onBlur={handleBlur("address")}
                  />
                  <CardA3
                    Nav={Nav}
                    errors={errors}
                    setFieldValue={setFieldValue}
                    adrress={adrress}
                    address2={address2}
                    currentSelectedItem={currentSelectedItem}
                    HandelChangeValue={HandelChangeValue}
                    onBlur={handleBlur("address2")}
                    touched={touched}
                  />
                  <CardA4 />
                </View>
              </ScrollView>
              <View style={styles.BoxButton}>
                <PrimaryButton
                  onPress={handleSubmit}
                  disabled={AllAddresses.length || loading ? false : true}
                  loading={loading}
                >
                  Valider la commande
                </PrimaryButton>
              </View>
            </>
          );
        }}
      </Formik>

      <ModalPrimary visible={ShowModal} onDissmis={onDissmis}>
        <View style={styles.model}>
          <H5 color={COLORS.Sccess}>Toutes nos félicitations :</H5>
          <Txt fontSize={17} style={styles.text}>
          Achat terminé avec succès
       
          </Txt>
        </View>
        <Space space={40} />

        <HView spaceBetween style={styles.BoxBtn}>
          {/* <SecondaryButton style={styles.scd} onPress={onDissmis}>
            annuler
          </SecondaryButton> */}
          <Space  />
          <PrimaryButton
            onPress={() => {
              // FixdelAllCarts(Carts, dispatch);
              FixdelAllCarts(null,dispatch)
              onDissmis();
              Nav("Chercher")
            }}
            width={"45%"}
          >
            ok
          </PrimaryButton>
        </HView>
      </ModalPrimary>
    </View>
  );
};

export default Commander;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Blanc,
  },
  BoxButton: {
    padding: 20,
  },
  model: {
    padding: 20,
  },
  text: {
    marginTop: 16,
  },
  BoxBtn: {
    padding: 20,
    justifyContent:"flex-end"
  },
  scd: {
    paddingHorizontal: 30,
  },
});
