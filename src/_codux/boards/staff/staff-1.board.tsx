import { createBoard } from '@wixc3/react-board';
import { Staff } from '../../../components/staff/staff';

export default createBoard({
    name: 'Staff 1',
    Board: () => <Staff />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1241,
        windowWidth: 1024
    }
});
