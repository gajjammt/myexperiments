import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const Roster = () => (
  <div>
    <h1>roster</h1>
  </div>
)

const Schedule = () => (
  <div>
    <h1>schedule</h1>
  </div>
)

const Main = () => (
	<main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/roster' component={Roster} />
      <Route exact path='/schedule' component={Schedule} />
    </Switch>
  </main>
)


const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/roster">Roster</Link></li>
				<li><Link to="/schedule">Scedule</Link></li>
			</ul>
		</nav>
	</header>
)

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<Main />
      </div>
    );
  }
}

export default App;
