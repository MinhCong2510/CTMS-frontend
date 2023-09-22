 import { createBoard } from '@wixc3/react-board';
import { UpcomingProjectField } from '../../../components/upcoming-project-field/upcoming-project-field';

export default createBoard({
    name: 'UpcomingProjectField',
    Board: () => <UpcomingProjectField />,
    isSnippet: true,
});
