import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import { TrialManager_Ongoing_Upcoming } from '../../components/trial-manager-ongoing-upcoming/trial-manager-ongoing-upcoming';





export default createBoard({
    name: 'Ongoing Trials Page',
    Board: () => <div className="OngoingTrialsPage">
        <Header />

        <div className="OngoingTrialFrPage">
            <h2 className="OngoingTrialFrPageFrame-h2">Ongoing Trials
                <div>
                    <h4>Project 1: Cancer-free
                        <p>This trials dedicate to..</p></h4>
                    <button className="Forum_OngoingTrials">Information</button>
                    <button className="Forum_OngoingTrials">Participants</button>
                    <button className="Forum_OngoingTrials">Forum/Announcement</button>
                    <button className="Forum_OngoingTrials">Survey</button></div>
                <div>
                    <button className="Forum_OngoingTrials">Phase 1: Opening phase
                        <p>Observation from week 1 to 3 </p>  </button>

                    <button className="Forum_OngoingTrials">Phase 2
                        <p>Observation from week 4 to 6</p></button>
                    <button className="Forum_OngoingTrials">Phase 3
                        <p>Observation from week 7 to 9</p></button>
                    <button className="Forum_OngoingTrials">Phase 4
                        <p>Observation from week 10 to 12</p></button>
                    <button className="Forum_OngoingTrials">Phase 5: Final Phase
                        <p>Finalizing reports</p></button></div>
            </h2>
            <TrialManager_Ongoing_Upcoming className="TrialManager" /></div></div>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1910,
        windowHeight: 1080,
        canvasHeight: 1080,
        canvasWidth: 1988
    }
});
