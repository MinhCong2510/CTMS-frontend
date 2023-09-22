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
    return <div>
        <header className="contentHeader">
            Contributions
        </header>
        <div className="textField" style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 20, textAlign: 'start'
        }}>
            <text>Project 1: Eradicate Cancer</text>
            <text>Project 1: Dementia</text>

        </div></div>;
};
