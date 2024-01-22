import React, {useState} from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Text, Switch} from 'react-native-paper';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { COLORS } from '../../Components/Styles/theme';

export function DrawerContent(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.ImageLogo}>
              <Fontisto
                name={'persons'}
                size={25}
                style={{color: COLORS.primary}}
              />
            </View>
            <View style={styles.BoxName}>
              <Text style={styles.Textnam}>nom:</Text>
              <Text style={styles.Textnam}>enzo</Text>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="info-with-circle"
                  color={COLORS.primary}
                  size={30}
                />
              )}
              label="A props de nous"
              onPress={() => {
                props.navigation.navigate('aprops');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Iconsss
                  name="person-search"
                  color={COLORS.primary}
                  size={30}
                />
              )}
              label="Information personnelle"
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Iconsss
                  name="language"
                  color={COLORS.primary}
                  size={30}
                />
              )}
              label="Langue"
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Iconsss
                  name="quick-contacts-mail"
                  color={COLORS.primary}
                  size={30}
                />
              )}
              label="Contacter nous"
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Iconss
                  name="export"
                  color={COLORS.primary}
                  size={30}
                />
              )}
              label="Partager l'application"
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => <Iconss name="logout" size={size} color={COLORS.red} />}
          label="Se deconnecter"
          onPress={() => {
            // signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}
