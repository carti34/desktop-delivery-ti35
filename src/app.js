import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import DeliverymenList from './screens/DeliverymenList';
import DeliverymenRegister from './screens/DeliverymenRegister';
import AssignOrder from './screens/AssignOrder';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/deliverymenList" component={DeliverymenList} />
                <Route path="/deliverymenRegister" component={DeliverymenRegister} />
                <Route path="/assignOrder" component={AssignOrder} />
            </Switch>
        </HashRouter>
    );
}

export default App;