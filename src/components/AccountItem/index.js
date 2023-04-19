import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/332494495_927309978620327_2587257253877827582_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TwlxBQKojz4AX8OlNRi&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDFT4eJ1ElD-nMjfk1mlwwkEGoAfsVWAtJ-1R-SwuAcJg&oe=64448ACC" alt="Hoa" className={cx('avatar')} />
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