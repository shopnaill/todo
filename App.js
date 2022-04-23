import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addToDo';

export default function App() {

  const [todo, setTodo] = useState([
    {key: '1', text: 'Learn React Native 1'},
    {key: '2', text: 'Learn React Native 2'},
    {key: '3', text: 'Learn React Native 3'},
    {key: '4', text: 'Learn React Native 4'},
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(item => item.key != key);
    });
  };

  const submitHandler = (text) => {
     if (text.length > 3) {
       setTodo((prevTodo) => {
         return [{key: Math.random().toString(), text: text}, ...prevTodo];
       });
     }else
     {
        Alert.alert('Oops', 'Todo must be over 3 characters long', [{text: 'Okay'}]);
     }
  };

  return (
    <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({item}) => (
                 <TodoItem item={item}  pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
    content: {
      padding: 20,
    },
    list: {
      marginTop: 20,
    },
});
