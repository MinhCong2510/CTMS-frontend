import classNames from 'classnames';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={styles.sidebar}>
            <h2 className="CTManager_Header">Current Trials</h2>
            <label className="CTManager_Name">Ongoing Trial 5: Trial Name-Code</label>
            <label className="CTManager_Name">Ongoing Trial 6: Trial Name-Code</label>
            <label className="CTManager_Name">Ongoing Trial 7: Trial Name-Code</label>
            <h2 className="CTManager_Header">Calendar</h2>
            <img
                src="https://www.typecalendar.com/wp-content/uploads/2022/09/September-2023-Calendar.jpg"
                style={{
                    width: 180,
                    height: 160,
                }}
            />
            <h2 className="CTManager_Header">Feedback</h2>
            <p className="CTManager_Name"> Tell us what you think</p>
        </div>
    );
};
