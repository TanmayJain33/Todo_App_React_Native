import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/header';
import TodoItems from './components/todoItems';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'eat breakfast', key: '1'},
    {text: 'continue the course', key: '2'},
    {text: 'eat lunch', key: '3'},
    {text: 'back to course', key: '4'},
    {text: 'eat dinner', key: '5'},
    {text: 'play games', key: '6'},
    {text: 'go to sleep', key: '7'},
  ]);
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be more than 3 characters long.', [
        {text: 'Understood'},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* Todo Form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {/* FlatList */}
            <FlatList
              data={todos}
              renderItem={({item}) => {
                return <TodoItems item={item} pressHandler={pressHandler} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
