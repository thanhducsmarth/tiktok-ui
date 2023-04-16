import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from '../DefautLayout/DefautLayout.module.scss';

const cx = classNames.bind(styles)

function DefautLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    )
}

export default DefautLayout