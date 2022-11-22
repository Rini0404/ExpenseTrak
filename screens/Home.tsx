import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello User!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
