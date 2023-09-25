import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import { TrialManager_Ongoing_Upcoming } from '../../components/trial-manager-ongoing-upcoming/trial-manager-ongoing-upcoming';
import Classnames from 'classnames';





export default createBoard({
    name: 'Ongoing Trials Page',
    Board: () => <div className="OngoingTrialsPage-frontPage">
        <Header />

        <div className="OngoingTrialsPage_Context">
            <h2 className="OngoingTrialsPage_Header">Ongoing Trials
                <div>
                    <h4 className="OngoingTrialsPage_OverallDescription">Project 1: Cancer-free
                        <p>This trial dedicate to discover methods, eradicate cancer cells by boosting immunity system </p></h4>
                    <button className={Classnames('Forum_OngoingTrials', 'OngoingTrialsPage-button')}>Information</button>
                    <button className={Classnames('Forum_OngoingTrials', 'OngoingTrialsPage-button')}>Participants</button>
                    <button className="OngoingTrialsPage-button">Forum/Announcement</button>
                    <button className="OngoingTrialsPage-button">Survey</button></div>
                <div>
                    <button className="OngoingTrialsPage-button">Phase 1<p>Observation from week 1 to 3 </p>  </button>

                    <button className="OngoingTrialsPage-button">Phase 2
                        <p>Observation from week 4 to 6</p></button>
                    <button className="OngoingTrialsPage-button">Phase 3
                        <p>Observation from week 7 to 9</p></button>
                    <button className="OngoingTrialsPage-button">Phase 4
                        <p>Observation from week 10 to 12</p></button>
                    <button className="OngoingTrialsPage-button">Phase 5: Final Phase
                        <p>Finalizing reports</p></button></div>
            </h2>
            <TrialManager_Ongoing_Upcoming className="Manager_details" />
        </div></div>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 1080,
        canvasWidth: 1988
    }
});
