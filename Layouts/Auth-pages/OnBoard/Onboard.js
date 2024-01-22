import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, StatusBar, Animated, Dimensions, View} from 'react-native';
import slides from './Components/OnboardFlatList/slides';
import OnBoardItem from './Components/OnboardFlatList/OnBoardItem';
import Page from './Components/OnboardFlatList/Page';
import Buttons from './Components/OnboardFlatList/Buttons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {ScrollView} from 'react-native-gesture-handler';

// const {height, width} = Dimensions.get('screen');

function OnBoard({navigation, navigation: {goBack}}) {
  const [index, setIndex] = useState(0);
  const {width} = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(0)).current;

  const refSlides = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const config = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const nextScroll = async () => {
    if (index < slides.length - 1) {
      refSlides.current.scrollToIndex({index: index + 1});
    } else {
      navigation.navigate('login');
    }
  };
  const PrvtScroll = async () => {
    refSlides.current.scrollToIndex({index: index - 1});
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View >
          <Animated.FlatList
            data={slides}
            renderItem={({item}) => <OnBoardItem item={item} />}
            horizontal
            contentContainerStyle={{}}
            scrollEventThrottle={32}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={item => item.id}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={config}
            ref={refSlides}
          />

          <Page data={slides} scrollX={scrollX} />
          <Buttons
            nextScroll={nextScroll}
            PrvtScroll={PrvtScroll}
            index={index}
            skipSlide={() => navigation.navigate('services')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F5ED4',
  },
  SlideShape: {
    backgroundColor: '#6F5ED4',
  },
});

export default OnBoard;
