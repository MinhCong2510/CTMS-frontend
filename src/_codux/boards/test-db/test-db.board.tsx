import { createBoard } from '@wixc3/react-board';
import { TestDB } from '../../../components/test-db/test-db';

export default createBoard({
    name: 'TestDB',
    Board: () => <TestDB />,
    isSnippet: true,
});
