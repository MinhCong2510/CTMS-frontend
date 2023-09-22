import classNames from 'classnames';
import styles from './upcoming-project-field.module.scss';
import sstyles from '../staff/staff.module.scss';
import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';

export interface UpcomingProjectFieldProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UpcomingProjectField = ({ className }: UpcomingProjectFieldProps) => {
    return <div>
        <Header />
        <Navbar />
        <div className="splitPanel">
            <div>
                <text className="contentHeader">Upcoming Project</text>
                <div className="splitPanel" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div className={styles.projectCard}>
                        <text className={styles.projectCardTitle}>Sleeping Study</text>
                        <img src="https://renuerx.com/wp-content/uploads/2021/02/renue-rx-What-Vitamins-Interfere-With-Birth-Control-Pills-Supplement-Options.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={sstyles.staffField}>
                        <text>Project Name: Sleeping Study</text>
                        <text>Status: Open on 10/10/2023</text>
                        <text>Description: Finding if sleeping pills affects blood pressure </text>
                        <text>Participants: 50 people </text>
                    </div>
                </div>
            </div>
            <Sidebar /></div></div>;
};
