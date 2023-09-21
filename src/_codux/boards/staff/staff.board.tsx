import { createBoard } from '@wixc3/react-board';
import { Staff } from '../../../components/staff/staff';

export default createBoard({
    name: 'Staff',
    Board: () => <Staff />,
    isSnippet: true,
});
