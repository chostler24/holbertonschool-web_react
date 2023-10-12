import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';
import { connect } from 'react-redux'; // Import connect from Redux

// Define the Footer component
const Footer = ({ className, user }) => {
  return (
    // Render the Footer component with the provided className
    <div className={className}>
      {/* Display the copyright notice using utility functions */}
      <p>Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}</p>

      {/* Conditionally render a "Contact us" link if the user is logged in */}
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </div>
  );
};

// Create mapStateToProps function to map user prop to Redux state
const mapStateToProps = (state) => ({
  user: state.user,
});

// Connect the Footer component to mapStateToProps
export default connect(mapStateToProps)(Footer);
