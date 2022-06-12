// App.js는 더이상 영화를 로드하지 않고, router을 render 한다!
// router는 url을 보고 있는 컴포넌트임
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          {/* /movie/:id 에서 id가 Detail에서 useParams()으로 받는 값이다 id를 다른 걸로도 바꿔봐 그럼 감이 와 */}
          <Detail />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
