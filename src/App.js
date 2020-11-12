import Cards from "./components/Cards";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Swipe from "./components/Swipe";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Cards />
            <Swipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
