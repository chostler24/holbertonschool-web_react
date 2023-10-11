import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection title={title} children={children}/>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: 40,
  },
})

export default BodySectionWithMarginBottom;
