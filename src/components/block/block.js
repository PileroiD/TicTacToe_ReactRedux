import React, { Component } from "react";
import PropTypes from "prop-types";

import "./block.css";

class Block extends Component {
    render() {
        const { value, onClick } = this.props;

        return (
            <div className="block" onClick={onClick}>
                {value}
            </div>
        );
    }
}

Block.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
};

export default Block;
