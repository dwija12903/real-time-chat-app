// Dwija Panchal //dwijapanchal@yahoo.com
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='f78283f2-96fd-426f-94ec-ff6f9627b35f'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    );
}

export default ChatsPage;
