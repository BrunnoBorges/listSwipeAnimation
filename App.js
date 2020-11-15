import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

import ListItem from './src/ListItem';

export default function App() {

  const notifications = [
    {id: '1', title: 'Atualização Política de Privacidade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue urna. ', hoursIn: '1h'},
    {id: '2', title: 'Atualização Política de Privacidade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue urna. ', hoursIn: '3h'},
    {id: '3', title: 'Atualização Política de Privacidade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue urna. ', hoursIn: '4h'},
    {id: '4', title: 'Atualização Política de Privacidade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue urna. ', hoursIn: '5h'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}> 
        {/* <View style={[styles.box, { transform: [{ rotate: "-40deg" }] }]}>
          <Icon name="bullhorn" size={30} color="#757575" />
        </View> */}
        Recentes
      </Text>
      <FlatList
      data={notifications}
      keyExtractor={item => item.id}
      renderItem={ ({item}) => (
        <ListItem
        data={item}
        handleLeft={()=> alert('Notificação  foi marcada como lida!')}
        handleRight={ ()=> alert('Notificação foi excluida!')}
        />
      )}
      ItemSeparatorComponent={ () => <Separator/> }
      />

      <Text style={styles.title}> 
        {/* <View style={[styles.box, { transform: [{ rotate: "-40deg" }] }]}>
          <Icon name="bullhorn" size={30} color="#757575" />
        </View> */}
        Anteriores
      </Text>

    </View>
  );
}


const Separator = () => <View style={{flex:1, height:1, backgroundColor: '#DDD'}}></View>

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    paddingTop: 30
  },
  title: {
    backgroundColor: 'rgba(196, 196, 196, 0.2)',
    paddingVertical: 15,
    color: '#757575',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});