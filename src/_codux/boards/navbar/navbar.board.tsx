import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';
import {MemoryRouter} from 'react-router-dom';

export default createBoard({
    name: 'Navbar',
    Board: () => 
    <MemoryRouter>
        <Navbar />
    </MemoryRouter>
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1050,
        windowWidth: 1024
    },
});
