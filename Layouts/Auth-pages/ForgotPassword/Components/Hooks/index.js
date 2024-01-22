import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";

setLocale(fr);

export function UseForgot() {


  const [hidePass, setHidePass] = useState(true);
  const [c_hidePass, setC_HidePass] = useState(true); 

  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };
  const HandlehideC_Pass = () => {
    setC_HidePass(!c_hidePass);
  };

  const forgotValues = {
    email: "",
  };
  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
    },
  };

  const initialState = {
    newPassword: "",
    c_password: "",
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    // UserLogin(dispatch, configHead, values);
    console.log("values", values);
  };

  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema = Yup.object().shape({
    email: Yup.string()

      .required("email ou numero telephone est requis")
      .min(8, "email est trop court - doit comporter au moins 4 caractères.")
      .matches(emailRegex, "Doit être un email valide !"),
  });

  let validationSchemaPassword = Yup.object().shape({
    newPassword: Yup.string()

      .min(
        6,
        "Le mot de passe est trop court - doit comporter au moins 8 caractères."
      )
      .required("Mot de passe requis"),
    c_password: Yup.string()
      .required("Confirm Mot de passe requis")
      .oneOf(
        [Yup.ref("newPassword")],
        "Les mots de passe ne correspondent pas"
      ),
  });

  return {
    validationSchema,
    forgotValues,
    onSubmit,
    initialState,
    validationSchemaPassword,
    HandlehidePass,
    hidePass,
    c_hidePass,
    HandlehideC_Pass
  };
}
