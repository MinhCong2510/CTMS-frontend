import { createBoard } from '@wixc3/react-board';
import { UserDetails } from '../../../components/user-details/user-details';

export default createBoard({
    name: 'UserDetails',
    Board: () => <UserDetails />,
    isSnippet: true,
});
