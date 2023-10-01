import { createBoard } from '@wixc3/react-board';
import { UpcomingProject } from '../../../components/upcoming-project/upcoming-project';

export default createBoard({
    name: 'PreviousProject',
    Board: () => <UpcomingProject />,
    isSnippet: true,
});
