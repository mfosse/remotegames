// react:
import React, { Component } from "react";
import ReactDOM from "react-dom";
// react-router:
import { Router, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// components:
import About from "src/About.jsx";
import FAQ from "src/FAQ.jsx";
// import CurrentPlayers from "src/CurrentPlayers.jsx";
import Streams from "src/Streams.jsx";
import Stream from "src/Stream.jsx";

// redux:
import { Provider, connect } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";

// actions:
import { updateSettings } from "src/actions/settings.js";
import { updateClientInfo } from "src/actions/clientInfo.js";

// // redux-saga:
import createSagaMiddleware from "redux-saga";
// import handleActions from "src/sagas";
// import handleEvents from "src/sockets";

// libs:
import socketio from "socket.io-client";
import localforage from "localforage";
import merge from "deepmerge";
// import "normalize.css";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let preloadedState = {

	// account: {
	//
	// },

	stream: {
		chat: {
			messages: [],
			userids: [],
		},
		players: {
			controlQueues: [],
			turnTimers: [],
			controllerStates: [],
			count: 8,
		},
		time: {
			server: 0, // server time (in ms)
			lastServerUpdate: 0, // when it was last updated (in ms)
			ping: 0,
		},
		accountMap: {},
		waitlist: [],
	},

	streams: {
		streamList: [],
	},

	clientInfo: {
		authToken: null,
		loggedIn: false,
		userid: null,
		username: "???",
		connectedAccounts: [],
		validUsernames: [],
		usernameIndex: 0,
		// banTime: 0,
		// currentPlayer: 0,
		isMod: false,
		isBanned: false,
		waitlisted: false,
		timePlayed: 0,
		emailVerified: false,
	},

	settings: {
		general: {
			keyboardControls: true,
			controllerControls: true,
			mouseControls: false,
			touchControls: false,
			controllerView: true,
			fullscreen: false,
			largescreen: false,
			audioThree: false,
			analogStickMode: false,
			currentPlayer: 0,
			volume: 50,
			theme: "dark",
		},

		keyboardControls: true,
		controllerControls: true,
		mouseControls: false,
		touchControls: false,
		controllerView: true,
		fullscreen: false,
		largescreen: false,
		audioThree: false,
		analogStickMode: false,
		dpadSwap: false,
		TDSConfig: false,

		currentPlayer: 0,
		streamNumber: 0,
		volume: 50,
		theme: "dark",
	},

	form: {},
};

for (let i = 0; i < preloadedState.stream.players.count; i++) {
	preloadedState.stream.players.turnTimers.push({
		turnStartTime: 0,
		forfeitStartTime: 0,
		turnLength: 0,
		forfeitLength: 0,
	});
	preloadedState.stream.players.controlQueues.push([]);
	preloadedState.stream.players.controllerStates.push({
		btns: 0,
		axes: [0, 0, 0, 0, 0, 0],
	});
}

function loadState() {
	// Get stored preferences
	localforage.getItem("settings").then((value) => {
		let settings = {};
		// If they exist, write them
		if (typeof value != "undefined") {
			settings = Object.assign({}, JSON.parse(value));
			settings.streamNumber = 0; // force streamNumber to be 0 bc things rely on it loading first
			settings.currentPlayer = 0; // same as above
		}

		console.log(settings);
		store.dispatch(updateSettings({ ...settings }));

		// check if banned:
		localforage.getItem("banned").then((value) => {
			if (value != null) {
				store.dispatch(updateClientInfo({ isBanned: true }));
				window.banned = true;
			} else {
				window.banned = false;
			}
		});

		setTimeout(() => {
			// check if incognito && chrome:
			let isChrome =
				/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
			if (isChrome) {
				let fs = window.RequestFileSystem || window.webkitRequestFileSystem;
				if (!fs) {
					console.log("check failed?");
				} else {
					fs(
						window.TEMPORARY,
						100,
						() => {
							console.log("ok.");
						},
						() => {
							store.dispatch(updateClientInfo({ banned: true }));
							window.banned = true;
						},
					);
				}
			}
		}, 100);
	});
}

loadState();

// window.onbeforeunload = () => {
// 	console.log("saving settings");
// 	localforage.setItem("settings", JSON.stringify(this.props.settings));
// 	return null;
// };

const store = createStore(
	rootReducer,
	preloadedState,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

let accountServerConnection = socketio("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});


// import handleActions from "src/sagas";
import handleAccountEvents from "src/sockets/account";
// // listen to events and dispatch actions:
handleAccountEvents(accountServerConnection, store.dispatch);

// handle outgoing events & listen to actions:
// and maybe dispatch more actions:
// sagaMiddleware.run(handleActions, {
// 	socket,
// });

class Index extends Component {
	constructor(props) {
		super(props);

		this.theme = createMuiTheme({
			typography: {
				useNextVariants: true,
			},
			palette: {
				type: "dark",
				primary: {
					main: "#2181ff", // #2181ff
				},
				secondary: {
					main: "#ff3b3b",
				},
			},
		});
		// this.theme = {
		// 	typography: {
		// 		useNextVariants: true,
		// 	},
		// 	palette: {
		// 		type: "dark",
		// 		primary: {
		// 			main: "#2181ff", // #2181ff
		// 		},
		// 		secondary: {
		// 			main: "#ff3b3b",
		// 		},
		// 	},
		// };
		this.getTheme = this.getTheme.bind(this);
		this.switchTheme = this.switchTheme.bind(this);

		// let currentValue = null;
		// const unsubscribe = store.subscribe(() => {
		// 	let previousValue = currentValue;
		// 	currentValue = store.getState().settings.theme;
		// 	if (previousValue !== currentValue) {
		// 		console.log("theme changed");
		// 		// this.switchTheme(currentValue);
		// 		this.setState({});
		// 	}
		// });
	}

	switchTheme(themeName) {
		switch (themeName) {
			case "light":
				this.theme = merge(this.theme, {
					palette: {
						type: "light",
					},
				});
				break;
			case "dark":
				this.theme = merge(this.theme, {
					palette: {
						type: "dark",
					},
				});
				break;
			case "mint":
				this.theme = merge(this.theme, {
					palette: {
						type: "light",
						primary: {
							main: "#16d0f4",
						},
						secondary: {
							main: "#24d2ac",
						},
						background: {
							paper: "#5ae097",
						},
					},
				});
				break;
		}
		this.theme = createMuiTheme(this.theme);
	}

	getTheme() {}

	render() {
		console.log("re-rendering index");

		if (/^\/download/.test(window.location.pathname)) {
			window.location.href = "https://remotegames.io/8099/download/";
			window.history.replaceState("", "", "/");
		}

		return (
			<Provider store={store}>
				<ThemeProvider theme={this.theme}>
					<CssBaseline />
					<BrowserRouter>
						{/* selects the first matching path: */}
						<Switch>
							<Route
								path="/about"
								render={(props) => {
									return <About {...props} />;
								}}
							/>
							<Route
								path="/FAQ"
								render={(props) => {
									return <FAQ {...props} />;
								}}
							/>
							{/* <Route
								path="/CurrentPlayers"
								render={(props) => {
									return <CurrentPlayers {...props} />;
								}}
							/> */}
							<Route
								path="/streams"
								render={(props) => {
									return (
										<Streams
											{...props}
											accountServerConnection={accountServerConnection}
										/>
									);
								}}
							/>
							<Route
								// path="/s/:username"
								path="/(s|login|register|account|remap)/:username?"
								render={(props) => {
									return (
										<Stream
											{...props}
											store={store}
											accountServerConnection={accountServerConnection}
											sagaMiddleware={sagaMiddleware}
										/>
									);
								}}
							/>
							// order matters here, can't do exact path or /login and /register break:
							<Route
								path="/"
								render={(props) => {
									return (
										<Streams
											{...props}
											store={store}
											accountServerConnection={accountServerConnection}
											sagaMiddleware={sagaMiddleware}
										/>
									);
								}}
							/>
						</Switch>
					</BrowserRouter>
				</ThemeProvider>
			</Provider>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		theme: state.settings.theme,
// 	};
// };
//
// // const Index2 = connect(mapStateToProps)(Index);
//
// function connectWithStore(store, WrappedComponent, ...args) {
// 	let ConnectedWrappedComponent = connect(...args)(WrappedComponent);
// 	return (props) => (<ConnectedWrappedComponent {...props} store={store}/>);
// }
//
// const Index2 = connectWithStore(store, Index, mapStateToProps);

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
