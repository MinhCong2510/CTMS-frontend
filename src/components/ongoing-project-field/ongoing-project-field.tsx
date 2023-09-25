import classNames from 'classnames';
import styles from './ongoing-project-field.module.scss';
import sstyles from '../staff/staff.module.scss';
import ssstyles from '../upcoming-project-field/upcoming-project-field.module.scss';
import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';

export interface OngoingProjectFieldProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const OngoingProjectField = ({ className }: OngoingProjectFieldProps) => {
    return <div>
        <Header />
        <Navbar />
        <div className="splitPanel">
            <div>
                <text className="contentHeader">Ongoing Project</text>
                <div className="splitPanel" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className={ssstyles.projectCard}>
                        <text className={styles.projectCardTitle}>Cancer Free</text>
                        <img src="https://st4.depositphotos.com/14431644/24384/i/450/depositphotos_243840022-stock-photo-text-sign-showing-cancer-free.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={sstyles.staffField}>
                        <text>Project Name: Cancer Free</text>
                        <text>Status: Second Stage</text>
                        <text>Description: Finding ways of eradicating cancer cells by boosting immunity </text>
                        <text>Participants: 1 people </text>
                    </div>
                </div>
                <div className="splitPanel" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div className={ssstyles.projectCard}>
                        <text className={styles.projectCardTitle}>Dementia</text>
                        <img src="https://img.aplaceformom.com/image/web-lighthouse/prod/dementia_behaviors.jpg?t=default " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={sstyles.staffField}>
                        <text>Project Name: Dementia</text>
                        <text>Status: First Stage</text>
                        <text>Description: Finding ways of preventing dementia by boosting brain cells </text>
                        <text>Participants: 1 people </text>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div></div>;
};
