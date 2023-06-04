import './App.css';
import Color from './components/Color';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <Color />
    </div>
  );
}

export default App;
