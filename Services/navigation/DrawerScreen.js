import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pannier from "../../Layouts/App-Pages/Accueil";
import Chercher from "../../Layouts/App-Pages/Chercher";
import Profile from "../../Layouts/App-Pages/Profile";
import Filters from "../../Layouts/App-Pages/Filters";
import FiltersSearchInput from "../../Layouts/App-Pages/FiltersSearchInput";
import InfoScreenC4 from "../../Layouts/App-Pages/InfoScreen-Card - 4 (adresses)";
import MesAdresses from "../../Layouts/App-Pages/MesAdresses";
import ModePaiments from "../../Layouts/App-Pages/ModePaiments";
import OffreCodePromos from "../../Layouts/App-Pages/Offre&CodePromos";
import AddNewCashCard from "../../Layouts/App-Pages/AddNewCashCard";
import FiltersResults from "../../Layouts/App-Pages/FitrelResults";
import MesInformations from "../../Layouts/App-Pages/MesInformations";
import MesNotifications from "../../Layouts/App-Pages/Notification";
import MesFavoris from "../../Layouts/App-Pages/MesFavoris";
import MesCommandes from "../../Layouts/App-Pages/MesCommandes";
import Aide from "../../Layouts/App-Pages/Aide";
import Apropos from "../../Layouts/App-Pages/Apropos";
import Confidentialités from "../../Layouts/App-Pages/Confidentialités";
import Panier from "../../Layouts/App-Pages/Panier";
import InfoMesCommandes from "../../Layouts/App-Pages/InfoMesCommandes";
import Commander from "../../Layouts/App-Pages/Commander";
import RestaurantDetails from "../../Layouts/App-Pages/RestaurantDetails (PLATS)";
import InfoMonPlat from "../../Layouts/App-Pages/RestaurantDetails (PLATS)/layouts/InfoDetailsPlats";
import MyLocation from "../../Layouts/App-Pages/MyLocation";
import RestrictionsAlimentaires from "../../Layouts/App-Pages/Restrictions alimentaires";
import AnimTab1 from "./BottomtabAnimated1";
import AllDayOffer from "../../Layouts/App-Pages/AllDayOffer";
import AllBestAddresses from "../../Layouts/App-Pages/AllBestAddresses";
import ConfirmPassword from "../../Layouts/Auth-pages/ForgotPassword/ConfirmPassword";
import ForgotPassword from "../../Layouts/Auth-pages/ForgotPassword";

const RootStack = createNativeStackNavigator();

const DrawerScreen = (props) => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="AnimTab1" component={AnimTab1} />
      {/* <RootStack.Screen name="MainTabScreen" component={MainTabScreen} /> */}
      <RootStack.Screen name="Chercher" component={Chercher} {...props} />
      <RootStack.Screen name="Pannier" component={Pannier} {...props} />
      <RootStack.Screen name="Profile" component={Profile} {...props} />
      <RootStack.Screen name="Filters" component={Filters} {...props} />
      <RootStack.Screen
        name="FiltersSearchInput"
        component={FiltersSearchInput}
        {...props}
      />
      <RootStack.Screen
        name="InfoScreenC4"
        component={InfoScreenC4}
        {...props}
      />
      <RootStack.Screen name="MesAdresses" component={MesAdresses} {...props} />
      <RootStack.Screen
        name="ModePaiments"
        component={ModePaiments}
        {...props}
      />
      <RootStack.Screen
        name="OffreCodePromos"
        component={OffreCodePromos}
        {...props}
      />
      <RootStack.Screen
        name="AddNewCashCard"
        component={AddNewCashCard}
        {...props}
      />
      <RootStack.Screen
        name="FiltersResults"
        component={FiltersResults}
        {...props}
      />
      <RootStack.Screen
        name="MesInformations"
        component={MesInformations}
        {...props}
      />
      <RootStack.Screen
        name="MesNotifications"
        component={MesNotifications}
        {...props}
      />
      <RootStack.Screen name="MesFavoris" component={MesFavoris} {...props} />
      <RootStack.Screen
        name="MesCommandes"
        component={MesCommandes}
        {...props}
      />
      <RootStack.Screen name="Aide" component={Aide} {...props} />
      <RootStack.Screen name="Apropos" component={Apropos} {...props} />
      <RootStack.Screen
        name="Confidentialités"
        component={Confidentialités}
        {...props}
      />

      <RootStack.Screen name="Panier" component={Panier} {...props} />
      <RootStack.Screen name="InfoMesCommandes" component={InfoMesCommandes} {...props} />
      <RootStack.Screen name="Commander" component={Commander} {...props} />
      <RootStack.Screen name="RestaurantDetails" component={RestaurantDetails} {...props} />
      <RootStack.Screen name="InfoMonPlat" component={InfoMonPlat} {...props} />
      <RootStack.Screen name="MyLocation" component={MyLocation} {...props} />
      <RootStack.Screen name="RestrictionsAlimentaires" component={RestrictionsAlimentaires} {...props} />
      <RootStack.Screen name="AllDayOffer" component={AllDayOffer} {...props} />
      <RootStack.Screen name="AllBestAddresses" component={AllBestAddresses} {...props} />

      
      
    </RootStack.Navigator>
  );
};
export default DrawerScreen;
