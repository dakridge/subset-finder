// dependencies
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// icons
import icons from './icons';

// styles
import css from './refactoring-ui.styl';

class Icon extends PureComponent {
    static propTypes = {
        size     : PropTypes.number,
        name     : PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
    }

    static defaultProps = {
        size: 30,
    }

    render() {
        const { name, className, size } = this.props;
        const Svg = icons[name];

        return (
            <div className={`${css.Main} ${className}`}>
                <Svg height={size} />
            </div>
        );
    }
}

export default Icon;
