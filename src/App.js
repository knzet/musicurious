import './styles/App.css';
import './styles/Menu.css';
import './styles/Profile.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageMenu from './components/PageMenu';
import ProfileView from './components/ProfileView';

function App() {
    return (
        <div className="App">
            {/* <div width="100%" background-color="red">
                search
            </div> */}
            <PageMenu className="Menu"></PageMenu>
            <ProfileView className="Profile"></ProfileView>
        </div>
    );
}

export default App;
