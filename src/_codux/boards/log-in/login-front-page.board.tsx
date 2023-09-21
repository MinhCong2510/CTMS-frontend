import { createBoard } from '@wixc3/react-board';
import { LogIn } from '../../../components/log-in/log-in';

export default createBoard({
    name: 'Login front page',
    Board: () => <LogIn />,
    isSnippet: true,
});
