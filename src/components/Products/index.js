import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Products from './Products';
import {
  getProductData,
} from './action';

function mapStateToProps(state) {
  return {
    products: state.products.productsData,
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProductData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
