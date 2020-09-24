// PAUSE while we figure out pivot away from home and food goals

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


class Welcome extends React.Component {
  static navigationOptions = {
    title: "WeekdayWakeup"
  };
}

export default class WeekdayWakeup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    // this.setDate = this.setDate.bind(this);
  }

  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  render() {

    const { date } = this.state;

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Sustainable Home</Text>
        <Text style={{fontSize: 20}}>Take us through your weekday (M-F) ...</Text>
        <Text style={{fontSize: 20}}>What time do you usually start your day?</Text>
        <DateTimePicker
          // testID="dateTimePicker"
          style={{width:'100%'}}          
          value={date}
          mode="default"
          is24Hour={true}
          display="default"
          onChange={ date => this.setState({ date }) }
          // onChange={onChange}
        />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});