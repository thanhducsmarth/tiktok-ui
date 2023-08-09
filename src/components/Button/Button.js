import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to, 
    disabled, 
    href, 
    primary=false, 
    outline=false, 
    text = false,
    rounded = false, 
    small = false, 
    large = false, 
    children, 
    className,
    onClick, 
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        className,
        primary,
        outline,
        small,
        large,
        rounded,
        text,
    })
    
    return (
    <Comp className={classes} {...props}>
        <span>{children}</span>
    </Comp>
 )
}

export default Button;