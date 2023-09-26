// import './Footer.css';
import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';

const Footer = ({ className }) => (
  <div className={className}>
    <p>Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}</p>
  </div>
);

export default Footer;
