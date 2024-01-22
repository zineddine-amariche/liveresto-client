import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { UserInfoUpdate } from "../../../../Redux/Actions/UpdateUserInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { dispatchLogin } from '../../../../Redux/Actions/Login';

setLocale(fr);

export function UseUpdate() {
  const [isSelected, setSelection] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  const hadelChnageCheck = () => {
    setSelection(!isSelected);
  };
  const auth = useSelector((state) => state.auth);

  const { isLogged, loading, data } = auth;

  const UpdateValues = {
    id: data?.customer.id,
    profile_id: 1,
    gender: "",
    lastname: "",
    firstname: "",
    mobile_phone: "",
    landline_phone: "",
    birthday: "",
    email: "",
    password: "",
    password_check: "",
    referer: "",
    origin_id: 3,
  };
  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: "Bearer " + data?.customer.token,
    },
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    let pass = await AsyncStorage.getItem("password");
    let emaill = await AsyncStorage.getItem("login");
    // console.log('email,password', email,password)

    let Object = {
      id: data?.customer.id,
      profile_id: 1,
      gender: values.gender ? values.gender : data?.customer.gender,
      lastname: values.lastname ? values.lastname : data?.customer.lastname,
      firstname: values.firstname ? values.firstname : data?.customer.firstname,
      mobile_phone: values.mobile_phone
        ? values.mobile_phone
        : data?.customer.mobile_phone,
      landline_phone: values.landline_phone
        ? values.landline_phone
        : data?.customer.landline_phone,
      birthday: values.birthday ? values.birthday : data?.customer.birthday,
      email: values.email,
      password: values.password ? values.password : pass,
      password_check: values.password_check ? values.password_check : pass,
      referer: values.referer ? values.referer : data?.customer.referer,
      origin_id: 3,
    };

    let Object2 = {
      id: data?.customer.id,
      profile_id: 1,
      gender: values.gender ? values.gender : data?.customer.gender,
      lastname: values.lastname ? values.lastname : data?.customer.lastname,
      firstname: values.firstname ? values.firstname : data?.customer.firstname,
      mobile_phone: values.mobile_phone
        ? values.mobile_phone
        : data?.customer.mobile_phone,
      landline_phone: values.landline_phone
        ? values.landline_phone
        : data?.customer.landline_phone,
      birthday: values.birthday ? values.birthday : data?.customer.birthday,
      password: values.password ? values.password : pass,
      password_check: values.password_check ? values.password_check : pass,
      referer: values.referer ? values.referer : data?.customer.referer,
      origin_id: 3,
    };



    if (values.email === "" ) {
      // console.log("Object2", Object2);
      // const {password} = Object
      // console.log('email,password', emaill,pass ,'\n\n\n\n\n')

      await UserInfoUpdate(
        dispatch,
        configHead,
        { customer: Object2 },
        emaill,
        pass
      );
    } else {
      // console.log("Object1", Object);
      const {email,password} = Object
      // console.log('email,password\n\n\n', email,password)
      // AsyncStorage.setItem("login", email),
      // AsyncStorage.setItem("password", password)
      await UserInfoUpdate(
        dispatch,
        configHead,
        { customer: Object },
        email,
        password
      );
    }

    // let user = {
    //   customer: {
    //     customer: values,
    //   },
    // };

  };
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };
  const HandlehidePass2 = () => {
    setHidePass2(!hidePass2);
  };
  const lowercaseRegEx = /(?=.*[a-z])/;
  const uppercaseRegEx = /(?=.*[A-Z])/;
  const numericRegEx = /(?=.*[0-9])/;
  const specialsRegEx = /[^A-Za-z 0-9]/g;
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const phoneRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

  let validationSchema = Yup.object().shape({
    lastname: Yup.string()
      .min(4, "Prénom est trop court - doit être de 4 caractères minimum.")
      .max(35, "Prénom est trop long - doit être de 35 caractères maximum."),
    // .required("Prénom est requis"),
    firstname: Yup.string()
      .min(4, "Nom est trop court - doit être de 4 caractères minimum.")
      .max(35, "Nom est trop long - doit être de 35 caractères maximum."),
    // .required("Nom est requis"),
    email: Yup.string()
      // .required("email est requis")
      .matches(emailRegex, "Doit être un email valide !"),
    mobile_phone: Yup.string()
      // .required("Le numéro téléphone est requis")
      .matches(phoneRegex, "Doit être un numéro téléphone valide !")
      .min(
        10,
        "Le numéro téléphone est trop court - doit comporter au moins 10 caractères."
      ),
    password: Yup.string()
      .max(
        10,
        "Le mot de passe est trop long - doit être de 10 caractères maximum."
      )
      .min(
        8,
        "Le mot de passe est trop court - doit comporter au moins 8 caractères."
      ),
    //   .matches(
    //     lowercaseRegEx,
    //     "Doit contenir un caractère alphabétique minuscule!"
    //   )
    //   .matches(
    //     uppercaseRegEx,
    //     "Doit contenir un caractère alphabétique majuscule!"
    //   )
    //   .matches(numericRegEx, "Doit contenir un caractère numérique!")
    //   .matches(specialsRegEx, "Doit contenir un caractère spécial")
    // .required("Mot de passe requis"),
    password_check: Yup.string()
      // .required("Confirme Mot de passe requis")
      .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas"),
    gender: Yup.string(),
    // required("le sexe est requis"),
    birthday: Yup.string(),
    // required("date de naissance est requis"),
    referer: Yup.string(),
    // required("champ requis"),
  });

  return {
    validationSchema,
    UpdateValues,
    isSelected,
    hadelChnageCheck,
    hidePass,
    hidePass2,
    HandlehidePass,
    HandlehidePass2,
    onSubmit,
  };
}


    // let filter = values.includes(data?.customer.email)
    // console.log('filter', filter)
    //  await dispatchLogin(dispatch, configHead, values,isLogged,loading)
    // console.log("onSubmit", user.customer);
    // UserInfoUpdate(dispatch, configHead, user.customer);
    // dispatch({type:AUTH_LOADING })
    // dispatch({type:REGISTER , payload:values})
