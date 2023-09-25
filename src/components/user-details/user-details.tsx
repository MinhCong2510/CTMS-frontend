import classNames from 'classnames';
import styles from './user-details.module.scss';

export interface UserDetailsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserDetails = ({ className }: UserDetailsProps) => {
    return <div>
        <header className="contentHeader">User Details</header>
        <div className="textField" style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 20, width: '500px', fontSize: '30px'
        }}>
            <text>Contact number: (+61)***-***-***</text>
            <text>Email Address: jackp@hotmail.com</text>
            <text>Department: Oncology</text>
            <text>Badges: Employee of the Month</text>
            <text>Term and Policy </text>
            <text>Set photo private or public: Public</text>
        </div></div>;
};
