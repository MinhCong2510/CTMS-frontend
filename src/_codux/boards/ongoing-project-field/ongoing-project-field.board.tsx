import { createBoard } from '@wixc3/react-board';
import { OngoingProjectField } from '../../../components/ongoing-project-field/ongoing-project-field';

export default createBoard({
    name: 'OngoingProjectField - done',
    Board: () => <OngoingProjectField />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 875
    }
});
