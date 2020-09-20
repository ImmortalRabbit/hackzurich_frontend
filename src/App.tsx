import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonPage, 
  IonSplitPane,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import ScanReceipt from './pages/ScanReceipt';
import { Menu } from './common/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './style.css';

const App: React.FC = () => (
  <IonApp>
    <IonSplitPane contentId="main">
          <Menu />
          <IonPage id="main">
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/login" component={Login} />
              <Route path="/create-account" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route path="/company-loyalty-programs" component={Profile} />
              <Route path="/scanReceipt" component={ScanReceipt} />
              <Route exact path="/" render={() => <Redirect to="/login" />} />
            </IonRouterOutlet>
          </IonReactRouter>
          </IonPage>
    </IonSplitPane>
  </IonApp>
);

export default App;
