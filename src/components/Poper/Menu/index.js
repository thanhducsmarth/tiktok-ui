import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import { Wrapper as PoperWrapper } from '~/components/Poper';

const cx = classNames.bind(styles);

function Menu({children}) {
    return (
        <Tippy 
            interactive
            placement="bottom-end"
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <h2>Menu items</h2>
                    </PoperWrapper>
                </div>
            )}
        >    
            {children}
        </Tippy>        
        );
}

export default Menu;