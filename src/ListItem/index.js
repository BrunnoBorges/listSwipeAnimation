import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListItem({data, handleLeft, handleRight}){


  function LeftActions(progress, dragX){

    const scale = dragX.interpolate({
      inputRange:[0, 100],
      outputRange:[0, 1],
      extrapolate: 'clamp'
    })

    return(
      <View style={styles.leftAction}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}> Marcar como Lida</Animated.Text>
        {/* <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}> <Icon name="check-square" size={40} color="#FFF" /> </Animated.Text> */}
      </View>
    );
  }

  function RightActions({progress, dragX, onPress}){

    const scale = dragX.interpolate({
      inputRange:[-100, 0],
      outputRange:[1, 0],
      extrapolate: 'clamp'
    })

    return(
      <TouchableOpacity onPress={onPress} style={styles.rightAction}>
        <Animated.View style={[{padding: 20},  { transform: [{ scale: scale}]} ]}>
          <Icon name="trash" size={40} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return(
    <Swipeable
        renderLeftActions={LeftActions}
        onSwipeableLeftOpen={handleLeft}
        renderRightActions={(progress, dragX)=>     
        <RightActions progress={progress} dragX={dragX} onPress={handleRight} />}
    >
      <View style={styles.container}>
        <Text style={styles.title}> {data.title} </Text>
        <View style={styles.containerData}>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.hours}>{data.hoursIn}</Text>
        </View>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title:{
    fontSize: 18,
    color: '#222',
    fontWeight: '600'
  },
  containerData :{
    display: "flex", 
    flexDirection: 'row'
  },
  description: {
    fontSize: 14,
    color: '#222',
    fontWeight: "100",
    paddingLeft: 5,
    flex: 1
  },
  hours: {
    fontSize: 12,
    color: '#757575',  
    fontWeight: '100',
    paddingHorizontal: 5,
    paddingVertical: 5,
    // flex: 1
  },
  leftAction:{
    backgroundColor: '#0062CC',
    justifyContent: 'center',
    flex:1,
  },
  rightAction:{
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  actionText:{
    fontSize: 17,
    color: '#FFF',
    padding: 20,
  }
});