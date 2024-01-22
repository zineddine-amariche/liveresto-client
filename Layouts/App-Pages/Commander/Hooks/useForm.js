import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { submitValidation } from "../../../../Redux/Actions/ValidateOrder";
import { useSelector } from "react-redux";

setLocale(fr);

export function useForm() {
  // let hotel = {
  //   fullName: "",
  //   phone: "",
  //   apartement: "",
  // };

  // let products = [];
  // let payments = [];

  // let bill = {};

  // let order = {
  //   customer_id: "",
  //   establishment_id: "",
  //   for_when: "",
  //   delivery_address_id: "",
  //   bill_address_id: "",
  //   voucher_code: "",
  //   use_loyalty: "",
  //   comment: "",
  //   origin_id: "",
  //   total: "",
  // };

  const initialValues1 = {
    address: "",
  };
  const { data } = useSelector((state) => state.auth);

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${data.customer.token}`,
    },
  };

  const  produit  = useSelector(
    (state) => state.OrderObjet
  );

  const initialValues2 = {
    address: "",
    address2: "",
  };

  // let Values = currentSelectedItem === 1 ? initialValues2 : initialValues;

  const dispatch = useDispatch();

  const { bill, hotel } = useSelector(
    (state) => state.ValidationOrder
  );

  // console.log('order', order)
  // console.log('hotel', hotel)
  // console.log('bill', bill)
  // console.log('payments', payments)
  // console.log('products', products)

  // console.log('------ALL6---', {order :{...order ,"payments":payments,"products":products }})

  let objet = {
    hotel,
    bill,
    order:produit,
  };

  const onSubmit = async (values,onShow) => {
    // console.log("onSubmit", values);

    let obj = JSON.stringify(objet)
    //  console.log('objet', obj)

    submitValidation(dispatch, obj, configHead,onShow);
  };

  let Schema1 = Yup.object().shape({
    address: Yup.string().required("Adresse de livraison est requis"),
  });

  let Schema2 = Yup.object().shape({
    address: Yup.string().required("Adresse de livraison est requis"),
    address2: Yup.string().required(
      "Adresse de facturation identique est requis"
    ),
  });

  // let Schema = currentSelectedItem === 1 ? Schema2 : Schema1;
  return {
    Schema2,
    Schema1,
    onSubmit,
    dispatch,
    initialValues1,
    initialValues2,
  };
}


// {
//   "hotel": {
//       "apartement": "2",
//       "fullName": "Bejaia Hôtel",
//       "phone": "+213782205066"
//   },
//   "bill": "bignovacompany@gmail.com",
//   "order": {
//       "bill_address_id": 14808,
//       "comment": "",
//       "customer_id": 17587,
//       "delivery_address_id": 14808,
//       "for_when": "2022-01-13 20:45:00",
//       "establishment_id": 3,
//       "origin_id": 2,
//       "payments": [{
//           "amount": 103.9,
//           "id": 4
//       }],
   
//       "products":"[{\"id\":2323,\"quantity\":3,\"comment\":null,\"extras\":null},{\"id\":2318,\"quantity\":4,\"comment\":null,\"extras\":null},{\"id\":2768,\"quantity\":2,\"comment\":null,\"extras\":null}]",
//       "total": 103.9,
//       "use_loyalty": 0,
//       "voucher_code": ""
//   }
// }