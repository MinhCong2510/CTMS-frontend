import { createBoard } from '@wixc3/react-board';
import { OngoingProjectField } from '../../../components/ongoing-project-field/ongoing-project-field';

export default createBoard({
    name: 'OngoingProjectField',
    Board: () => <OngoingProjectField />,
    isSnippet: true,
});
