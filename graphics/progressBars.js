import * as React from 'react';
import { View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

var income = 1.0;
var expenses = 0.6;

const ProgressBars = () => (
    <View>
        <ProgressBar progress={income} color={Colors.red800} />
        <ProgressBar progress={income} color={Colors.red800} />
    </View>
  
);

export default ProgressBars;