import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';

export default function DateTask ({day}) {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    let currDate = moment()
      .format('YYYY-MM-DD hh:mm:ss');
    let expirydate = day
    let diffr = moment
      .duration(moment(expirydate)
      .diff(moment(currDate)))
      .asDays();
    setTotalDuration(diffr);
  }, []);

  return (
    <View styles={styles.container}>
      <Text styles={styles.title}>{Math.ceil(totalDuration)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  }});
