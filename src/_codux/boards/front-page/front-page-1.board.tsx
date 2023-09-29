import { createBoard } from '@wixc3/react-board';
import { FrontPage } from '../../../components/front-page/front-page';

export default createBoard({
    name: 'FrontPage -Home Page- done',
    Board: () => <FrontPage />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1080,
        canvasWidth: 1966,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
