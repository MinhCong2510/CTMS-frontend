import Classnames from 'classnames';
import styles from './previous-trial-1-home-page.module.scss';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { MemoryRouter } from 'react-router-dom';
import { createBoard } from '@wixc3/react-board';
import { TrialManager_Component } from '../../components/trial-manager-component/trial-manager-component';

export interface PreviousTrial_1_HomePageProps {
    className?: string;
}




export const PreviousTrial_1_HomePage = ({ className }: PreviousTrial_1_HomePageProps) => {
    return <div className="OngoingTrialsPage-frontPage">
        <Header />
        <Navbar />
        <div className={Classnames('OngoingTrialsPage_Context', 'splitPanel')}>
            <h2 className="OngoingTrialsPage_Header" >Previous Trials            
            <h4 className="OngoingTrialsPage_OverallDescription">Trial 1: Trial Name- Trial Code- Trial Manager
            <p>[This blank space will briefly describe the name, the process and the main purposes of conducting this medical trial. Additionally, the desired outcome and how the trail is going to impact the medical industry and benefit the patients will also be demonstrated.]</p></h4>
            
            <div className="OngoingTrailsPage_Home_StartHere">
                    <button className={Classnames('Forum_OngoingTrials', 'OngoingTrialsPage-button')}>Information</button>
                    <button className={Classnames('Forum_OngoingTrials', 'OngoingTrialsPage-button')}>Participants</button>
                    <button className="OngoingTrialsPage-button">Forum/Announcement</button>
                    <button className="OngoingTrialsPage-button">Survey</button></div>
            
            <div className="OngoingTrialsPage_Phases">
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 1 Evaluation Report Submission [Completed]</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 2 Evaluation Report Submission [Completed]</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 3 Evaluation Report Submission [Completed]</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 4 Evaluation Report Submission [Completed]</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 5 Evaluation Report Submission [Completed]</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 6 Evaluation Report Submission [Completed]</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Final Evaluation Report Submission</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Access to Resources</button>
            <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Related Trials </button>
            </div>
            
            
            </h2>


            <TrialManager_Component className="CTManager_Header" />
        </div>

    </div>;
};
