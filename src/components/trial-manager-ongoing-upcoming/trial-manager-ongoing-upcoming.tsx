import classNames from 'classnames';
import styles from './trial-manager-ongoing-upcoming.module.scss';
import { Sidebar } from '../sidebar/sidebar';

export interface TrialManager_Ongoing_UpcomingProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TrialManager_Ongoing_Upcoming = ({ className }: TrialManager_Ongoing_UpcomingProps) => {
    return <div>
        <h3 className={styles.CTManager_Details}>Clinical Trial Manager</h3>
        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
        <h5 className={styles['Manager-name']}>Name: Jack </h5>
        <h5>Contact Number:(+61) 4**-***-***</h5>
        <h5>Email Address: eHealthstaffID@gmail.nsw.com </h5>
        <h4>Lastest Announcement</h4>
        <h4>Recent Activities</h4>
        <Sidebar />

    </div>;
};
