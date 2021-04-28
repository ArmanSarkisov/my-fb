import classNames from 'classnames/bind';

// styles
import styles from './CircleButton.module.scss';

// components
import Icon from '../Icon';

const cx = classNames.bind(styles);

function CircleButton({ iconName }) {
    return (
        <button type="button" className={cx('button')}>
            {iconName && <Icon name={iconName} />}
        </button>
    )
}

export default CircleButton;