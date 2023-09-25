import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../components/profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile className="Profile" />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 768,
        windowWidth: 1024,
        canvasWidth: 1025,
        canvasHeight: 768
    }
});
