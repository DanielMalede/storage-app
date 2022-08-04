// import logo from './logo.svg';
// import './App.css';
import HomePage from './HomePage.component'
import HEADER from './HEADER.component'
import FOOTER from './FOOTER.component'
import Employees from './Employee.Class';
function App() {
  return (
    <div>
      <HEADER/>
      <Employees F_name="yeh"/>
      <HomePage fullname="Daniel Malede"/>
      <FOOTER/>
    </div>
  );
}

export default App;
