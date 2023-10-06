import { createBoard } from '@wixc3/react-board';
import { Trial_1_Home_Page } from '../../../components/trial-1-home-page/trial-1-home-page';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'Trial_1_Home_Page',
    Board: () =>
        <MemoryRouter>
            <Trial_1_Home_Page />
        </MemoryRouter>,
    isSnippet: true,
    environmentProps: {
        windowHeight: 1080, canvasHeight: 1080, canvasWidth: 1925, windowWidth: 1920,
    }
});
