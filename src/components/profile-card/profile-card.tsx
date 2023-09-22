import classNames from 'classnames';
import styles from './profile-card.module.scss';

export interface ProfileCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProfileCard = ({ className }: ProfileCardProps) => {
    return <div className={styles.profileField}>
        <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" alt=""
            style={{
                width: 150,
                height: 150,
                padding: 20,
                objectFit: 'cover',
            }}
        />
        <text className="textField">Username: Jack</text></div>;
};
