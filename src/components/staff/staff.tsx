import classNames from 'classnames';
import styles from './staff.module.scss';
import { Sidebar } from '../sidebar/sidebar';
<<<<<<< HEAD
import Sidebar_module from '../sidebar/sidebar.module.scss';
import NewProject_module from '../newproject/newproject.module.scss';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
=======
>>>>>>> b61e93ff89c1b96543dd5dc81868f00a115e6b07

export interface StaffProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Staff = ({ className }: StaffProps) => {
<<<<<<< HEAD
    return <div>
        <Header />
        <Navbar />
        <div className="splitPanel">
            <div>
                <header style={{
                    fontSize: 20,
                    paddingRight: 10,
                    paddingLeft: 10,
                    color: '#d96262',
                    fontWeight: 700, textAlign: 'left'
                }}>Staffs</header>
                <div className="splitPanel">
                    <div className={styles.staffProfile}>
                        <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" alt=""
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover',
                            }}
                        />
                        <div className={styles.staffField}>
                            <label>Name: Jack</label>
                            <label>Position:Doctor</label>
                            <label>Involved Projects:Cancer-Free, Dementia</label>
                            <label>Certification: PhD in Oncology</label>
                        </div>
                    </div>
                    <div className={styles.staffProfile}>
                        <img src="https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg" alt=""
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover',
                            }}
                        />
                        <div className={styles.staffField}>
                            <label>Name:Mark</label>
                            <label>Position:Admin</label>
                            <label>Involved Projects:Dementia</label>
                            <label>Certification: Admin Expert  </label>
                        </div>
                    </div>
                </div></div>
            <Sidebar /></div></div>;
=======
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
                    <div className={styles.staffField}>
                        <label>Name:</label>
                        <label>Position:</label>
                        <label>Involved Projects:</label>
                        <label>Certification: </label>
                    </div>
                </div>
                <div className={styles.staffProfile}>
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt=""
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                    <div className={styles.staffField}>
                        <label>Name:</label>
                        <label>Position:</label>
                        <label>Involved Projects:</label>
                        <label>Certification: </label>
                    </div>
                </div>
            </div>
        </div>
    </div>;
>>>>>>> b61e93ff89c1b96543dd5dc81868f00a115e6b07
};
