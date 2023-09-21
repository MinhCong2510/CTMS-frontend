import classNames from 'classnames';
import styles from './forgot-your-password.module.scss';

export interface Forgot_your_passwordProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Forgot_your_password = ({ className }: Forgot_your_passwordProps) => {
    return <div className={classNames(styles.root, className)}>Forgot_your_password</div>;
};
