import { createBoard } from '@wixc3/react-board';
import { OngoingProjectField } from '../../../components/ongoing-project-field/ongoing-project-field';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'OngoingProjectField - done',
    Board: () =>
        <MemoryRouter><OngoingProjectField /></MemoryRouter>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 875
    }
});
