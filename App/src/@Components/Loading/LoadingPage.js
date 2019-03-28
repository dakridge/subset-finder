// dependencies
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// spinner
import Spinner from './LoadingSpinner';

// style
import css from './LoadingSpinner.styl';

export default class LoadingPage extends PureComponent {
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

        const offset = -0.5 * size;

        return (
            <div className={css.SpinnerPage}>
                <div className={css.SpinnerContainer} style={{ marginTop: offset, marginLeft: offset }}>
                    <Spinner size={size} borderSize={borderSize} />
                </div>
            </div>
        );
    }
}
