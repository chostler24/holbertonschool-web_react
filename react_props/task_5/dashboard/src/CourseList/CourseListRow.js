import React from 'react';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <th colSpan="2">{textFirstCell}</th>
            )
        } else {
            return (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>
            )
        };
    } else {
        return (
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        )
    };
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;
