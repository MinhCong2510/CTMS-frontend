import { createBoard } from '@wixc3/react-board';
import { TrialManager_Ongoing_Upcoming } from '../../../components/trial-manager-ongoing-upcoming/trial-manager-ongoing-upcoming';

export default createBoard({
    name: 'TrialManager_Ongoing_Upcoming',
    Board: () => <TrialManager_Ongoing_Upcoming />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 404
    }
});
