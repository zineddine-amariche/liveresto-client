import { View, StyleSheet, ImageBackground, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";

import Like from "../../../Assets/Images/Like.png";
import Ceour from "../../../Assets/Images/Ceour.png";
import Moto from "../../../Assets/Images/moto.png";
import { H7 } from "../../utils/TextComponents";
import { COLORS } from "../../Styles/theme";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SET_FAVORIS_ESTA } from "../../../Redux/Types/Establishements";
import { LikeOutSvg } from "../../../Assets/Svg/LikeOut";
import { LikeInSvg } from "../../../Assets/Svg/LikeIn";
import Vector from "../../../Assets/Images/Vector.png";
const FavorisAdressesCard = ({ item, Nav, ind }) => {
  // console.log('item', item)

  const Establishements = useSelector((state) => state.Establishements);
  const { eststaFavoris, establishments } = Establishements;
  // console.log('eststaFavoris', eststaFavoris)
  const [LikedEsta, setLikedEsta] = useState(
    new Array(establishments?.establishments?.length).fill(false)
  );
  const [currentOptionSelected, setCurrentOptionSelected] = useState([]);

  const handleLike = (position, option) => {
    const updatedCheckedState = LikedEsta.map((item, index) =>
      index === position ? !item : item
    );
    setLikedEsta(updatedCheckedState);
    // console.log("LikedEsta", LikedEsta);
    // let filter = currentOptionSelected.includes(option);
    // console.log('filter', filter)
    // if (filter) {
    //   let itemsCopy = [...currentOptionSelected];
    //   // var index = currentOptionSelected.indexOf(option.title);
    //   itemsCopy.splice(position, 1); // to delete one item from the new array
    //   setCurrentOptionSelected(itemsCopy);
    //   // dispatch({ type: SET_FAVORIS_ESTA, payload: itemsCopy });
    // } else {
    //   setCurrentOptionSelected([...currentOptionSelected, option]);
    //   // dispatch({
    //   //   type: SET_FAVORIS_ESTA,
    //   //   payload: [...currentOptionSelected, option.title],
    //   // });
    // }
  };

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        Nav("InfoScreenC4", item);
      }}
    >
      <View style={styles.top}>
        <ImageBackground
          style={{ ...StyleSheet.absoluteFillObject }}
          source={{ uri: item?.img }}
          resizeMode="cover"
        />

        {LikedEsta.map((i, ind) => {
          if (i) {
            return (
              <TouchableOpacity
                key={ind}
                onPress={() => {
                  handleLike(ind, item);
                }}
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <LikeOutSvg />

                {/* <Image  source={Vector} style={{height:29 , width:29}} /> */}
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                key={ind}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  flex:1,
                }}
                onPress={() => {
                  handleLike(ind, item);
                }}
              >
                {/* <LikeInSvg /> */}
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",

                  }}
                >

                   <LikeInSvg />
             
                </View>
              </TouchableOpacity>
            );
          }
        })}
        <View style={styles.Time}>
          <H7 style={styles.TextTime}>30-40 Min</H7>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.Body}>
          <H7 style={styles.TextH7}>{item?.title}</H7>
          <View style={styles.row}>
            <H7 style={{ color: COLORS.Jaune2, fontWeight: "400" , lineHeight:25}} numberOfLines={2}>
              <H7 style={{ color: COLORS.Jaune2 }}>⭐</H7> {item?.ratings?.rate}
              <H7 style={styles.TextH72} > | {item?.subtitle}</H7>
            </H7>
          </View>
          <View style={styles.padding5} />
          <View style={[styles.row]}>
            <Image source={Moto} style={{ marginRight: 8 }} />
            <H7 numberOfLines={1} Bold="400" style={{ color: COLORS.Blue2 ,width:"90%"}}>
              {item?.address}
            </H7>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavorisAdressesCard;
