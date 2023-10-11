import { createBoard } from '@wixc3/react-board';
import { PreviousTrial_1_HomePage } from '../../../components/previous-trial-1-home-page/previous-trial-1-home-page';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'PreviousTrial_1_HomePage',
    Board: () => 
    <MemoryRouter>
       <PreviousTrial_1_HomePage />,
    </MemoryRouter>
    isSnippet: true,
    environmentProps: {
        windowHeight: 1080, canvasHeight: 1080, canvasWidth: 1342, windowWidth: 1920,
    }
});
