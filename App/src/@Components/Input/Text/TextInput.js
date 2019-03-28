// dependencies
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// styles
import css from './style.styl';

export default class TextInput extends PureComponent {
    static propTypes = {
        onChange : PropTypes.func,
        className: PropTypes.string,
        value    : PropTypes.string.isRequired,
    }

    static defaultProps = {
        onChange : null,
        className: '',
    }

    handleChange = (e) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(e);
        }
    }

    render() {
        const { value, className } = this.props;

        return (
            <div className={`${css.Main} ${className}`}>
                <input type="text" value={value} onChange={this.handleChange} />
            </div>
        );
    }
}
