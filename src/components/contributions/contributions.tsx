import classNames from 'classnames';
import styles from './contributions.module.scss';

export interface ContributionsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contributions = ({ className }: ContributionsProps) => {
    return <div className={styles['Profile-Background']}>
        <header className="contentHeader">
            Contributions
        </header>
        <div className="textField" style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 20, textAlign: 'start', fontFamily: 'Times New Roman, serif', color: '#FFFFFF', backgroundColor: 'rgb(3, 67, 125)', fontSize: '30px', width: '500px'
        }}>
            <text>Trial 1: &quot;Trial Name- Trial Code&quot;</text>
            <text>Trial 2: &quot;Trial Name- Trial Code&quot;</text>
            <text>Trial 3: &quot;Trial Name- Trial Code&quot;</text>
            <text>Previous Trial 1: &quot;Trial Name- Trial Code&quot;</text>
            <text>Previous Trial 2:Trial Name- Trial Code&quot;</text>
            <text>Previous Trial 3: &quot;Trial Name- Trial Code&quot;</text>

        </div></div>;
};
