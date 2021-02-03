import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 24,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },

});

export default styles;
