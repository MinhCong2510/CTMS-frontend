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
            <div className="OngoingTrials_Main">
                <text className="contentHeader">Ongoing Trials:</text>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className={ssstyles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial Name</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg" alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={classNames(sstyles.staffField, 'CTManager_Name')}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: [First/Second/Third/Last...] Stage</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [number] people </text>
                    </div>
                </div>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className={ssstyles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial Name</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg" alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={classNames(sstyles.staffField, 'CTManager_Name')}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: [First/Second/Third/Last...] Stage</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [number] people </text>
                    </div>
                </div>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className={ssstyles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial Name</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={classNames(sstyles.staffField, 'CTManager_Name')}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: [First/Second/Third/Last...] Stage</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [number] people </text>
                    </div>
                </div>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className={ssstyles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial Name</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={sstyles.staffField}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: [First/Second/Third/Last...] Stage</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [number] people </text>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div></div>;
};
