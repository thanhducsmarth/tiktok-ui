import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/356934653_3601818140098865_2409460795532585706_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JssjgmnyqqEAX9kEzLW&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDfsRcaNDmto5p-ArLpJzER01hkPQbBRy6AMKlrRtVhgQ&oe=64B10BE1" alt="Hoa" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van An</span>
                    <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvanan</span>
            </div>
        </div>
    )
}

export default AccountItems;