import logo from './logo.svg';
import { TwitterFollowButton, TwitterShareButton } from 'react-twitter-embed';
import TelegramLoginButton from 'react-telegram-login';
import './App.css';

function App() {
  const onTelegramAuth = (user) => {
      alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TwitterFollowButton screenName={"LeapProtocol"} options={{size: 'large'}} />
        <TwitterShareButton url="https://leapprotocol.org" options={{
          text: "#LeapProtocol is awesome",
          size: "large"
        }}/>

        <TelegramLoginButton
          botName="@PinkAvocadoBot"
          dataOnauth={() => console.log("test")}
        />

        <script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-login="PinkAvocadoBot" data-size="large" data-onauth={onTelegramAuth} data-request-access="write"></script>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
