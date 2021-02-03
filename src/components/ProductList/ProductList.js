import React from 'react';
import {
  Text, View, Image, Button, TextInput,
} from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';

const ProductListItem = ({
  item, editProduct, deleteProduct, editableId,
  updateProduct,
}) => (
  <View style={styles.productContainer}>
    <View>
      {editableId === item.id ? (
        <TextInput
          autoFocus
          onEndEditing={(e) => updateProduct(e.nativeEvent.text)}
        >
          {item.title}
        </TextInput>
      ) : <Text>{item.title}</Text>}

    </View>
    <View>
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={styles.imageStyle}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => editProduct(item.id)}
        title="Edit"
        color="blue"
      />
      <Button
        onPress={() => deleteProduct(item.id)}
        title="Delete"
        color="red"
      />
    </View>
    <View />
  </View>
);
ProductListItem.propTypes = {
  item: propTypes.object,
  editProduct: propTypes.func,
  deleteProduct: propTypes.func,
  updateProduct: propTypes.func,
  editableId: propTypes.number,

};

export default ProductListItem;
