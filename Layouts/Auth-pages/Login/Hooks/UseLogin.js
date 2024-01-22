import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { UserLogin } from "../../../../Redux/Actions/AuthActions";

setLocale(fr);

export function UseLogin() {
  const [isSelected, setSelection] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const hadelChnageCheck = () => {
    setSelection(!isSelected);
  };


  const loginValues = {
    email: "",
    password: "",
  };
  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
    },
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    UserLogin(dispatch, configHead, values);
  };
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  // const emailRegex =
  //   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema = Yup.object().shape({
    email: Yup.string()

      .required("email est requis")
      .min(8, "email est trop court - doit comporter au moins 4 caractères.")
      .matches(emailRegex, "Doit être un email valide !"),

    password: Yup.string()
      .max(
        20,
        "Le mot de passe est trop long - doit être de 15 caractères maximum."
      )
      .min(
        4,
        "Le mot de passe est trop court - doit comporter au moins 4 caractères."
      )
      .required("Mot de passe requis"),
  });






  return {
    validationSchema,
    loginValues,
    isSelected,
    hadelChnageCheck,
    hidePass,
    HandlehidePass,
    onSubmit,
  };
}
