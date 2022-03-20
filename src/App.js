import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";


function App() {
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      publicKey={'950e5e3b-55f8-4fb7-bbe0-609778ba1a08'}
      userName={'sohan'}
      userSecret={'sohaN@1234'}
      // renderChatFeed ={(chatAppProps) => <ChatFeed{...chatAppProps}/>}
      // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
