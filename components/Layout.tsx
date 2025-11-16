import React from 'react';
import { StyleSheet, View } from 'react-native';

const FlexboxLayout = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.blueBox} />
        <View style={styles.redBox} />
        <View style={styles.bottomRowContainer}>
        <View style={styles.yellowBox} />
        <View style={styles.yellowBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  blueBox: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  redBox: {
    flex: 2,
    backgroundColor: '#e74c3c',
  },
  bottomRowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  yellowBox: {
    flex: 1,
    backgroundColor: '#f1c40f',
  },
});

export default FlexboxLayout;