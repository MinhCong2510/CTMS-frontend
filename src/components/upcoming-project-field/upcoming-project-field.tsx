import classNames from 'classnames';
import styles from './upcoming-project-field.module.scss';
import sstyles from '../staff/staff.module.scss';
import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';
import {Link} from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
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
            <div className={"OngoingTrials_Main","staff-list"}>
                <header style={{
                    fontSize: 30,
                    paddingRight: 10,
                    paddingLeft: 10,
                    color: '#d96262',
                    fontWeight: 700, textAlign: 'center', alignSelf: 'center'
                }}>Previous Trials:</header>
                <select placeholder="Filter" className="Filter_Staffs"><option>Filter</option>
                    <option>Filter by Name</option>
                    <option>Filter by Position</option><option>Filter by Occupation</option>
                    <option>Filter by Involved Projects</option>
                    <option>Filter from A to Z</option>
                    <option>Filter from Z to A</option>
                </select>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <Link to ="/PreviousTrial_1_HomePage"> <div className={styles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial 1</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div> </Link>
                    <div className={sstyles.staffField}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: Completed on [enter date]</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [minimum- maximum number] people </text>
                    </div>
                </div>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className={styles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial 2</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={sstyles.staffField}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: Completed on [enter date]</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [minimum- maximum number]  people </text>
                    </div>
                </div>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className={styles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial 3</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={sstyles.staffField}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: Completed on [enter opening date]</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [minimum- maximum number]  people </text>
                    </div>
                </div>
                <div className={classNames('splitPanel', 'CTManager_Name')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px', paddingRight: '20px', paddingBottom: '10px' }}>
                    <div className={styles.projectCard}>
                        <text className={styles.projectCardTitle}>Trial 4</text>
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg " alt="" style={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                        }} />

                    </div>
                    <div className={sstyles.staffField}>
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: Completed on [enter date]</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [minimum- maximum number]  people </text>
                    </div>
                </div>
            </div>
            <Sidebar /></div></div>;
};
