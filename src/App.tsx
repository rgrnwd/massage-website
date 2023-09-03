import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App" id="outer-container">
                    <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
                     <div id="page-wrap">
                        <RootComponent />
                    </div>
                </div>
            </PersistGate>
        </Provider>
    )
}

export default App
