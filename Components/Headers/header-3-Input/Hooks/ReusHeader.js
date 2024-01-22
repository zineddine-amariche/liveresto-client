import { useDispatch, useSelector } from "react-redux";
import { GET_POSITION } from "../../../../Redux/Types/Accueil";

export function ReusHeader() {

    const dispatch = useDispatch();
    const OnSelectWiliays = (item) => {
      dispatch({type:GET_POSITION, payload:item});
    };
    const Accueil = useSelector((state) => state.Accueil);
    const { position } = Accueil;


  return {
    OnSelectWiliays,
    position,
  };
}