// dependencies
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// components
import Spinner from '@Components/Loading';

// styles
import css from './Button.styl';

/**
 * Button design system
 *
 * Emphasis : cta, high, medium, low
 *  - cta: rarely used, intended to draw the users attention, ignores `color`
 *  - high: should only show one per container, filled in background
 *  - medium: shaded in background, text is darker verson of the background
 *  - low: background is transparent, text color is the button color
 *  - nano: just barely visible
 *
 * Color: positive, destructive, passive
 */
export default class Button extends PureComponent {
    static propTypes = {
        onClick   : PropTypes.func,
        isSpinning: PropTypes.bool,
        disabled  : PropTypes.bool,
        className : PropTypes.string,
        emphasis  : PropTypes.string,
        color     : PropTypes.string,
        children  : PropTypes.node.isRequired,
    }

    static defaultProps = {
        className : '',
        onClick   : null,
        isSpinning: false,
        disabled  : false,
        emphasis  : 'high',
        color     : 'positive',
    }

    handleClick = (e) => {
        const { onClick } = this.props;

        if (onClick) {
            onClick(e);
        }
    }

    render() {
        const { isSpinning, children, className, color, emphasis, disabled } = this.props;

        // change content to spinner if requesting
        const content = isSpinning ? <Spinner /> : children;

        return (
            <button type="button" onClick={this.handleClick} className={`${css.Main} ${css[color]} ${css[emphasis]} ${className} ${disabled ? css.disabled : ''}`}>{content}</button>
        );
    }
}
