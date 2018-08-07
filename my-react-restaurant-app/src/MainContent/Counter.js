import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ numberAttending, numberUnconfirmed, totalInvited }) =>
  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{numberAttending}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{numberUnconfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{totalInvited}</td>
      </tr>
    </tbody>
  </table>;

Counter.propTypes = {
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number
}

export default Counter;
