import classNames from 'classnames';
import styles from './staff.module.scss';
import { Sidebar } from '../sidebar/sidebar';
import Sidebar_module from '../sidebar/sidebar.module.scss';
import NewProject_module from '../newproject/newproject.module.scss';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';

export interface StaffProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Staff = ({ className }: StaffProps) => {
    return <div>
        <Header />
        <Navbar />
        <div className="splitPanel">
            <div className="staff-list">
                <header style={{
                    fontSize: 30,
                    paddingRight: 10,
                    paddingLeft: 10,
                    color: '#d96262',
                    fontWeight: 700, textAlign: 'left', alignSelf: 'center'
                }}>Staffs</header>
                <select placeholder="Filter" className="Filter_Staffs"><option>Filter</option>
                    <option>Filter by Name</option>
                    <option>Filter by Position</option><option>Filter by Occupation</option>
                    <option>Filter by Involved Projects</option>
                    <option>Filter from A to Z</option>
                    <option>Filter from Z to A</option>
                </select>
                <div className="splitPanel">
                    <div className={styles.staffProfile}>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt="staff-profile-picture"
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover',
                                margin: '10px'
                            }}
                        />
                        <div className={styles.staffField}>
                            <label>Name: [insert staff name]</label>
                            <label>Position:[insert staff position]</label>
                            <label>Involved Projects: [insert project's name/code] </label>
                            <label>Occupation: [insert staff's occupation]</label>
                        </div>
                    </div>
                    <div className={styles.staffProfile}>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt=""
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover',
                                margin: '10px',
                            }}
                        />

                        <div className={styles.staffField}>
                            <label>Name: [insert staff name]</label>
                            <label>Position:[insert staff position]</label>
                            <label>Involved Projects: [insert project's name/code] </label>
                            <label>Occupation: [insert staff's occupation]</label>
                        </div>
                    </div>
                </div>
                <div className="splitPanel">
                    <div className={styles.staffProfile}>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt="staff-profile-picture"
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover',
                                margin: '10px',
                            }}
                        />
                        <div className={styles.staffField}>
                            <label>Name: [insert staff name]</label>
                            <label>Position:[insert staff position]</label>
                            <label>Involved Projects: [insert project's name/code] </label>
                            <label>Occupation: [insert staff's occupation] </label>
                        </div>
                    </div>
                    <div className={styles.staffProfile}>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt=""
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover',
                                margin: '10px',
                            }}
                        />
                        <div className={styles.staffField}>
                            <label>Name: [insert staff name]</label>
                            <label>Position:[insert staff position]</label>
                            <label>Involved Projects: [insert project's name/code] </label>
                            <label>Occupation: [insert staff's occupation]</label>
                        </div>
                    </div>
                </div>
                <div className="splitPanel">
                    <div className={styles.staffProfile}>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt="staff-profile-picture"
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover', margin: '10px',
                            }}
                        />
                        <div className={styles.staffField}>
                            <label>Name: [insert staff name]</label>
                            <label>Position:[insert staff position]</label>
                            <label>Involved Projects: [insert project's name/code] </label>
                            <label>Occupation: [insert staff's occupation]</label>
                        </div>
                    </div>
                    <div className={styles.staffProfile}>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt=""
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: 'cover', margin: '10px',
                            }}
                        />
                        <div className={styles.staffField}>
                            <label>Name: [insert staff name]</label>
                            <label>Position:[insert staff position]</label>
                            <label>Involved Projects: [insert project's name/code] </label>
                            <label>Occupation: [insert staff's occupation]</label>
                        </div>
                    </div>
                </div></div>
            <Sidebar /></div></div>;
};
