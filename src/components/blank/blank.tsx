import classNames from 'classnames';
import styles from './blank.module.scss';
import { Link } from 'react-router-dom';

export interface BlankProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Blank = ({ className }: BlankProps) => {
    return <div className={classNames(styles.root, className)}>
    <Link to="/frontpage">Blank</Link></div>;
};
