import { createBoard } from '@wixc3/react-board';
import { TrialManager_Component } from '../../../components/trial-manager-component/trial-manager-component';

export default createBoard({
    name: 'TrialManager_Component-done',
    Board: () => <TrialManager_Component className="CTManager_Header" />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 712
    }
});
