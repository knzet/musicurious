
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageMenu from './components/PageMenu';
import ProfileView from "./components/ProfileView";

function App() {
    return (
        <div className="App">
            <div>test test</div>
            {/*<PageMenu className="Menu"></PageMenu>*/}
            <ProfileView className="Profile"></ProfileView>
        </div>
    );
}

export default App;
