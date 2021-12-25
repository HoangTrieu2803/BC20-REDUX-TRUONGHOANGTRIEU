import logo from './logo.svg';
import './App.css';
import OanTuTi from './BaiTapOanTuTi';
import DatVeXemPhim from './BaiTapDatVe';
import {BrowserRouter, Route , Switch} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OanTuTi}/>
        <Route path="/movie" component={DatVeXemPhim} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
