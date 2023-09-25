import { createBoard } from '@wixc3/react-board';
import { ProfileCard } from '../../../components/profile-card/profile-card';

export default createBoard({
    name: 'ProfileCard',
    Board: () => <ProfileCard />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 643
    }
});
