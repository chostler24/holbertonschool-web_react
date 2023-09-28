import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define CSS styles for different row types
const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

// Define the CourseListRow component
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // Initialize a state variable to track whether the row is checked
  const [isChecked, setIsChecked] = useState(false);

  // Handle the checkbox click event
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // Render the component based on whether it's a header row or a regular row
  if (isHeader) {
    if (textSecondCell === null) {
      // Render a header row with a single cell if textSecondCell is null
      return (
        <tr>
          <th colSpan="2" className={css(styles.headerRow)}>{textFirstCell}</th>
        </tr>
      );
    }
    // Render a header row with two cells
    return (
      <tr className='column-headers'>
        <th className={css(styles.headerRow)}>{textFirstCell}</th>
        <th className={css(styles.headerRow)}>{textSecondCell}</th>
      </tr>
    );
  }

  // Render a regular row with a checkbox and two cells
  return (
    <tr className={css(isChecked ? styles.rowChecked : styles.row)}>
      <td><input type="checkbox" onChange={handleCheck} checked={isChecked} />{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

// Define prop types for the CourseListRow component
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

// Define default props for the CourseListRow component
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

// Export the CourseListRow component
export default CourseListRow;
