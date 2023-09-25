import classNames from 'classnames';
import styles from './trial-manager-component.module.scss';

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
        <h5 className="CTManager_Name">Name: Jack</h5>
        <h5 className="CTManager_Name">Contact Number: (+61)***-***-***</h5>
        <h5 className="CTManager_Name">Email Address: jackp@hotmail.com<h2 className="CTManager_Header">Las</h2>
        </h5>
    </div>;
};
