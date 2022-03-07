import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Text } from 'react-native';

export default function DateTask({ date }) {
  const [totalDuration, setTotalDuration] = useState(0);
  const regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  useEffect(() => {
    let currDate = moment()
      .format('YYYY-MM-DD hh:mm:ss');
    let expirydate = date;
    let diffr = regex.test(date) ? moment.duration(moment(expirydate).diff(moment(currDate))).asDays() : moment.duration(expirydate, 'days').asDays();
    setTotalDuration(diffr);
  }, []);

  return (
    <Text> Missing {Math.ceil(totalDuration)} days</Text>  
  );
};
