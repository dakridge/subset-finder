// dependencies
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// style
import css from './LoadingSpinner.styl';

export default class LoadingSpinner extends PureComponent {
    static propTypes = {
        size      : PropTypes.number,
        borderSize: PropTypes.number,
    }

    static defaultProps = {
        borderSize: 4,
        size      : 30,
    }

    render() {
        const { size, borderSize } = this.props;

        return (
            <div className={css.Main} style={{ height: size, width: size }}>
                <div className={css.Spinner} style={{ height: size, width: size, borderWidth: borderSize }} />
            </div>
        );
    }
}
