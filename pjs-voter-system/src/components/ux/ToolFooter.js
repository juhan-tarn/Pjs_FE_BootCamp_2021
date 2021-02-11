import React from 'react';
import PropTypes from 'prop-types';

export const ToolFooter = (props) => {
    return (
        <footer>
            <small>{props.footerText}</small>
        </footer>
    )
}

ToolFooter.defaultProps = {
    footerText : 'Copyright 2021. A Cool Company, Inc.',
}

ToolFooter.propTypes = {
    footerText: PropTypes.string.isRequired,
}