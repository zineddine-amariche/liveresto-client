import { combineReducers } from 'redux';
import auth from './AuthReducer';
import Tab from './Tab';
import search from './Search';
import Panier from './Panier';
import Accueil from './Accueil';
import Establishements from './Establishements';
import Products from './products';
import FixCarts from './Panier/FixAddToCart';
import Commandes from './Commandes';
import Adresses from './Adresses';
import ValidationOrder from './ValidationOrder';
import OrderObjet from './ValidationOrder/validateOrder';
import CHeckValidationCommande from './ValidationOrder/checkValidation';

const rootReducer = combineReducers({
  auth,
  Tab,
  search,
  Panier,
  Accueil,
  Establishements,
  Products,
  Commandes,
  FixCarts,
  Adresses,
  ValidationOrder,
  OrderObjet,
  CHeckValidationCommande
});

export default rootReducer;
