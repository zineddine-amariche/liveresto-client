import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AUTH_LOADING } from "../../../../Redux/Types/authTypes";
import { UserRegister } from "../../../../Redux/Actions/AuthActions";
// import { dispatchLogin } from '../../../../Redux/Actions/Login';

setLocale(fr);

export function UseLogin() {
  const [isSelected, setSelection] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  const hadelChnageCheck = () => {
    setSelection(!isSelected);
  };
  const auth = useSelector((state) => state.auth);

  const { isLogged, loading } = auth;

  const loginValues = {
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
  // let token = `${process.env.REACT_APP_CLE}`;
  let configHead = {
    headers: {
      // method: 'POST',
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      // Authorization: 'Bearer ' + token,
    },
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    let user = {
      customer: {
        customer: values,
      },
    };
    //  await dispatchLogin(dispatch, configHead, values,isLogged,loading)
    console.log("onSubmit", user.customer);
    UserRegister(dispatch, configHead, user.customer);
    // dispatch({type:AUTH_LOADING })
    // dispatch({type:REGISTER , payload:values})
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
      .max(35, "Prénom est trop long - doit être de 35 caractères maximum.")
      .required("Prénom est requis"),
    firstname: Yup.string()
      .min(4, "Nom est trop court - doit être de 4 caractères minimum.")
      .max(35, "Nom est trop long - doit être de 35 caractères maximum.")
      .required("Nom est requis"),
    email: Yup.string()
      .required("email est requis")
      .matches(emailRegex, "Doit être un email valide !"),
    mobile_phone: Yup.string()
      .required("Le numéro téléphone est requis")
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
      )
      // .matches(
      //   lowercaseRegEx,
      //   "Doit contenir un caractère alphabétique minuscule!"
      // )
      // .matches(
      //   uppercaseRegEx,
      //   "Doit contenir un caractère alphabétique majuscule!"
      // )
      // .matches(numericRegEx, "Doit contenir un caractère numérique!")
      // .matches(specialsRegEx, "Doit contenir un caractère spécial")
      .required("Mot de passe requis"),
    password_check: Yup.string()
      .required("Confirme Mot de passe requis")
      .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas"),
    gender: Yup.string().required("le sexe est requis"),
    birthday: Yup.string().required("date de naissance est requis"),
    referer: Yup.string().required("champ requis"),
  });

  return {
    validationSchema,
    loginValues,
    isSelected,
    hadelChnageCheck,
    hidePass,
    hidePass2,
    HandlehidePass,
    HandlehidePass2,
    onSubmit,
  };
}
