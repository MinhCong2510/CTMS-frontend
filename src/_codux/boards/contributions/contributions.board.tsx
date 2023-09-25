import { createBoard } from '@wixc3/react-board';
import { Contributions } from '../../../components/contributions/contributions';

export default createBoard({
    name: 'Contributions',
    Board: () => <Contributions />,
    isSnippet: true,
});
