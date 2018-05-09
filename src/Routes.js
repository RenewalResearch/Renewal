import React, { Component } from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Loginapp from './src/LoginAnimation';

import Listview from './pages/ListView';
import FlatListViewArticle from './proto/FlatListViewArticle';
import DemoFlatList from './proto/FlatListDemo'; 

import Webviewcustom from './pages/MessageWebView';
import WebviewcustomProto from './pages/MessageWebViewCustom';

import Favoris from './pages/Favoris';
import Historique from './pages/Historique';
import MonCompte from './pages/MonCompte';
import Concept from './pages/Concept';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
				<Stack key="root" hideNavBar={true}>
			    	{/*old login page 
					<Scene key="login" component={Login} title="Login" initial={false}/> 
					<Scene key="signup" component={Signup} title="Register"/> */}
					{ /* new login page with animation */}
					<Scene key="loginapp" component={Loginapp} title="Loginapp"  initial ={false} /> 
					{/* old listview 
					<Scene back={true} key="listview" component={Listview} title="Listview" initial={false}/>{/* panHandlers={null} /> */}
					{/* new listview pages */}
					<Scene key="flatListViewArticle" component={FlatListViewArticle} title="FlatListViewArticle"  title="Renewal" initial ={true} panHandlers={null} /> 
					<Scene key="webviewcustom" component={Webviewcustom} title="Webviewcustom"  />
					<Scene key="webviewcustomProto" component={WebviewcustomProto} title="WebviewcustomProto" initial={false} />	

					{/* menu */}
					<Scene key="favoris" component={Favoris} title="Favoris" initial={false} />
					<Scene key="historique" component={Historique} title="Historique" initial={false} />
					<Scene key="monCompte" component={MonCompte} title="Mon Compte" initial={false} />
					<Scene key="concept" component={Concept} title="Le Concept" initial={false} />		
				</Stack>
			 </Router>
			)
	}
}
