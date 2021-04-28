import classNames from 'classnames/bind';

// styles
import styles from './Icon.module.scss';

// constants
import { plusIcon } from '../../../constants';

import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

const cx = classNames.bind(styles);

const icons = {
    [plusIcon]: <PlusIcon />
}

function Icon({ name }) {
    return (
        <span className={cx('icon')}>{icons[name]}</span>
    )
}

export default Icon;