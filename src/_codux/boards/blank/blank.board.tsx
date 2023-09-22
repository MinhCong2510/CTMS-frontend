import { createBoard } from '@wixc3/react-board';
import { Blank } from '../../../components/blank/blank';

export default createBoard({
    name: 'Blank',
    Board: () => <Blank />,
    isSnippet: true,
});
