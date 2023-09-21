import classNames from 'classnames';
import styles from './staff.module.scss';
import { Sidebar } from '../sidebar/sidebar';

export interface StaffProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Staff = ({ className }: StaffProps) => {
    return <div className={classNames(styles.root, className)}>
        <Sidebar />
        <div>
            <div>Staffs
                <div className={styles.staffProfile}>
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt=""
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                    <div>
                    <label>Name</label>
                    <label>Name</label>
                    <label>Name</label>
                    <label>Name</label>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
