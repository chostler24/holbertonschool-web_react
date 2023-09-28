// Import utility functions and dependencies
import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import React, { useContext } from 'react';
import AppContext from '../App/AppContext';

// Define the Footer component
const Footer = ({ className }) => {
  // Access user information from the AppContext using useContext hook
  const { user } = useContext(AppContext);

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

// Export the Footer component
export default Footer;
