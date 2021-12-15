import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, images, SIZES, FONTS, icons } from '../constants';

const OptionItem = ({ label, icon, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      <View
        style={[
          styles.shadow,
          {
            width: 60,
            height: 60,
          },
        ]}
      >
        <LinearGradient
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30,
            }}
          />
        </LinearGradient>
      </View>

      <Text
        style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const [destinations, setDestinations] = useState([
    {
      id: 0,
      name: 'Ski Villa',
      img: images.skiVilla,
    },
    {
      id: 1,
      name: 'Climbing Hills',
      img: images.climbingHills,
    },
    {
      id: 2,
      name: 'Frozen Hills',
      img: images.frozenHills,
    },
    {
      id: 3,
      name: 'Beach',
      img: images.beach,
    },
  ]);

  const renderDestination = (i, idx) => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          marginLeft: idx === 0 ? SIZES.padding : 0,
        }}
        onPress={() => navigation.navigate('DestinationDetail')}
      >
        <Image
          source={i.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.28,
            height: '82%',
            borderRadius: 15,
          }}
        />

        <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{i.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* banner */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
        />
      </View>

      {/* options */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}
        >
          <OptionItem
            icon={icons.airplane}
            bgColor={['#46aeff', '#5884ff']}
            label="Flight"
          />
          <OptionItem
            icon={icons.train}
            bgColor={['#fddf90', '#fcda13']}
            label="Train"
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['#e973ad', '#da5df2']}
            label="Bus"
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={['#fcaba8', '#fe6bba']}
            label="Taxi"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}
        >
          <OptionItem
            icon={icons.bed}
            bgColor={['#ffc465', '#ff9c5f']}
            label="Hotel"
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#7cf1fb', '#4ebefd']}
            label="Eats"
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#7be993', '#46caaf']}
            label="Adventure"
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#fca397', '#fc7b6c']}
            label="Event"
          />
        </View>
      </View>

      {/* destination */}
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item, index }) => renderDestination(item, index)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
