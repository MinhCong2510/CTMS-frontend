import classNames from 'classnames';
import styles from './profile.module.scss';
import { UserDetails } from '../user-details/user-details';
import { ProfileCard } from '../profile-card/profile-card';
import { Contributions } from '../contributions/contributions';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Profile = ({ className }: ProfileProps) => {
    return <div id="root" className={classNames(styles.profile, styles.root)}>
        <Header />
        <Navbar />
        <div>
            <ProfileCard />
            <div className="splitPanel">
                <UserDetails />
                <Contributions /></div></div></div>;
};
