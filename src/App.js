import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import './components/Bootstrap/bootstrap.min.css';
import Header from './components/Header/Header';
import MealDB from './components/MealDB/MealDB';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/meal/:mealId">
            <MealDB></MealDB>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
