import {Route, Switch, Link} from 'react-router-dom'
import Xodimlar from "./Componet/Xodimlar/Xodimlar";
import Lavozim from "./Componet/Lavozim/Lavozim";
import IlmiyDaraja from "./Componet/daraja/Daraja";

function App() {
    return (
        <div className="container mt-4 ">
            <Link  to="/Xodimlar">
                <button className={' btn btn-dark '}>Xodimlar</button>
            </Link>
            <Link className={'mx-3'} to="/Lavozim">
                <button className={' btn btn-dark '}>Lavozim</button>
            </Link>
            <Link to="/IlmiyDaraja">
                <button className={' btn btn-dark '}>IlmiyDaraja</button>
            </Link>


            <Switch>
                <Route path={'/Xodimlar'} component={Xodimlar}/>
                <Route path={'/Lavozim'} component={Lavozim}/>
                <Route path={'/IlmiyDaraja'} component={IlmiyDaraja}/>
            </Switch>


        </div>
    );
}

export default App;
