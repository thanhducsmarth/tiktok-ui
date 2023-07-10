import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faSpinner,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import {Wrapper as PoperWrapper} from '~/components/Poper';
import AccountItems from '~/components/AccountItem';
import Button from '~/components/Button/Button';
// import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles)

function Header() {
    const [searchResults, setSearchResults] = useState([])
    useEffect(() => {
        setTimeout(() =>{
            setSearchResults([1,2,3])
        },3000)
    },[]);

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src = {images.logo} alt = "tiktok"/>
            </div>
            <Tippy 
                interactive
                visible = {searchResults.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PoperWrapper>
                            <h4 className={cx('search-title')}>
                                <AccountItems/>
                                <AccountItems/>
                                <AccountItems/>
                                <AccountItems/>
                            </h4>
                        </PoperWrapper>
                    </div>
                )}
            >    
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Up load</Button>
                <Button primary disabled onClick={() =>alert(('Clicked'))}>Log in</Button>
            </div>
        </div>
    </header>
}

export default Header