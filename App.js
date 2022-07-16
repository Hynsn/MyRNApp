import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		textAlign: 'center'
	}
})

export default () => (
	<View style={styles.container}>
      <Text style={styles.text}>Hello React Native</Text>
    </View>
)
