import { createBoard } from '@wixc3/react-board';
import { UpcomingProjectField } from '../../../components/upcoming-project-field/upcoming-project-field';

export default createBoard({
    name: 'PreviousProjectField- done',
    Board: () => <UpcomingProjectField />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1174,
        canvasHeight: 945
    }
});
