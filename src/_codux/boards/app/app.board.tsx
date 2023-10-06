import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'App',
    Board: () => (
        <MemoryRouter>
            <App />
        </MemoryRouter>
    ),
    environmentProps: {

        windowWidth: 1966,
        windowHeight: 1080,
        canvasWidth: 1294,
        canvasHeight: 1084,
    },
});
