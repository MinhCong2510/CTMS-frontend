import classNames from 'classnames';
import styles from './test-db.module.scss';

export interface TestDBProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestDB = ({ className }: TestDBProps) => {
    return 
    <div className={classNames(styles.root, className)}>TestDB</div>;
    const staffDetails = [
        {id:1,
        name: 'John',
        position: 'Doctor',
        projects: 'Eradicate Cancer',
        awards: 'PhD in Cancertology',}
        {id:1,
        name: 'Jacob',
        position: 'Nurse',
        projects: 'Eradicate Cancer',
        awards: 'PhD in Cancertology',}

] as const;
};
