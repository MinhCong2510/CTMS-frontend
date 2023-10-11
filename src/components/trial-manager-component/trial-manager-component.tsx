import classNames from 'classnames';
import styles from './trial-manager-component.module.scss';
import { Sidebar } from '../sidebar/sidebar';

export interface TrialManager_ComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const TrialManager_Component = ({ className }: TrialManager_ComponentProps) => {
    return <div className={classNames(styles.root, className)}>
        <h2 className="CTManager_Header">Clinical Trial Manager</h2>
        <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" width="270"
        <h5 className="CTManager_Name">Name: Unknown</h5>
        <h5 className="CTManager_Name">Contact Number: (+61)***-***-***</h5>
        <h5 className="CTManager_Name">Email Address: Unknown@clinic.ehealth.com</h5>
        <h2 className="CTManager_Header">Lastest Announcement </h2>
        <p className="CTManager_Name">Announcement 1: Trial 1 Announcement</p>
        <p className="CTManager_Name">Announcement 2: Trial 2 Announcement</p>
        <p className="CTManager_Name">Announcement 3: Upcoming Trial 1 Announcement</p>
        <p className="CTManager_Name">Announcement 4: Upcoming Trial 2 Announcement</p>
        <h2 className="CTManager_Header"> Evaluation </h2>
        <p className="CTManager_Name">Evaluation 1: Trial 1 Evaluation Finalizing Stage</p>
        <p className="CTManager_Name">Evaluation 2: Trial 2 Evaluation Finalizing Stage</p>
        <p className="CTManager_Name">Evaluation 3: Evaluation 3 Due Date Release</p>
        <p className="CTManager_Name">Evaluation 4: Evaluation 4 Due Date Release</p>
        <Sidebar />

    </div>;
};
