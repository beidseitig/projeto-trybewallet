import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/header';
import { fetchAPIThunk } from '../actions';
import Expenses from '../components/expenses';

class Wallet extends React.Component {
  componentDidMount = async () => {
    this.getCurrency();
  }

  getCurrency = async () => {
    const { currencies } = this.props;
    await currencies();
  };

  render() {
    return (
      <>
        <Header />
        ;
        <Expenses />
      </>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchAPIThunk()),
});

Wallet.propTypes = {
  currencies: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
