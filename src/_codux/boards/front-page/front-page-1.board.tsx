import { createBoard } from '@wixc3/react-board';
import { FrontPage } from '../../../components/front-page/front-page';
import {MemoryRouter} from 'react-router-dom';

export default createBoard({
    name: 'FrontPage -Home Page- done',
    Board: () => <MemoryRouter><FrontPage /></MemoryRouter>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1080,
        canvasWidth: 1966,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
