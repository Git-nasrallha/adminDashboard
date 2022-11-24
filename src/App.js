import './style/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import RouteApp from './routes/RouteApp';
import 'react-toastify/dist/ReactToastify.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { userLoaded } from './store/actions/authAction';
import { getAllData } from './store/actions/fetchActions';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(userLoaded());
    dispatch(getAllData());
  },[dispatch])
  return (
  <Router>
      <div className="App">
        <ToastContainer />
        <RouteApp/>
      </div>
  </Router>
  );
}

export default App;
