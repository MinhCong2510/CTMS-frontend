import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import Classnames from 'classnames';
import { TrialManager_Component } from '../../components/trial-manager-component/trial-manager-component';






export default createBoard({

    name: 'Ongoing Trials Page - done',
    Board: () => <div className="OngoingTrialsPage-frontPage">
        <Header />

        <div className="OngoingTrialsPage_Context">
            <h2 className="OngoingTrialsPage_Header">Ongoing Trials
                <h4 className="OngoingTrialsPage_OverallDescription">Trial 1: Trial Name- Trial Code- Trial Manager
                    <p>[This blank space will briefly describe the name, the process and the main purposes of conducting this medical trial. Additionally, the desired outcome and how the trail is going to impact the medical industry and benefit the patients will also be demonstrated.]</p></h4>
                <div className="OngoingTrailsPage_Home_StartHere">
                    <button className={Classnames('Forum_OngoingTrials', 'OngoingTrialsPage-button')}>Information</button>
                    <button className={Classnames('Forum_OngoingTrials', 'OngoingTrialsPage-button')}>Participants</button>
                    <button className="OngoingTrialsPage-button">Forum/Announcement</button>
                    <button className="OngoingTrialsPage-button">Survey</button></div>
                <div className="OngoingTrialsPage_Phases">
                    <button className="OngoingTrialsPage-button">Phase 1<p>Observation from week 1 to 3 </p>  </button>

                    <button className="OngoingTrialsPage-button">Phase 2
                        <p>Observation from week 4 to 6</p></button>

                    <button className="OngoingTrialsPage-button">Phase 3
                        <p>Observation from week 7 to 9</p></button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 1 Evaluation Report Submission</button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 2 Evaluation Report Submission</button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 3 Evaluation Report Submission </button>

                    <button className="OngoingTrialsPage-button">Phase 4
                        <p>Observation from week 10 to 12</p></button>

                    <button className="OngoingTrialsPage-button">Phase 5
                        <p>Observation from week 13 to 15</p></button>

                    <button className="OngoingTrialsPage-button">Phase 6
                        <p>Observation from week 16 to 18</p></button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 4 Evaluation Report Submission</button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 5 Evaluation Report Submission</button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Phase 6 Evaluation Report Submission </button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Final Evaluation Report Submission</button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Access to Resources</button>

                    <button className={Classnames('OngoingTrialsPage-button', 'OngoingTrialsPage_Submissionbutton')}>Related Trials </button>

                </div></h2>
            <TrialManager_Component className="CTManager_Header" /></div></div>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 1080,
        canvasWidth: 2054
    }
});
