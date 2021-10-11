import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navigation, Footer, Home, Userlist, User, Questions} from "./components";
function App() {
  return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/questions" exact component={() => <Questions />} />
              <Route path="/userlist" exact component={() => <Userlist />} />
              <Route path="/user/:id" render={(props) => <User {...props} />}/>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;