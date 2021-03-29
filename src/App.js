import logo from './logo.svg';
import './App.css';
import './components/Menu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Menu from './components/Menu';

function App() {
    return (
        <div className="App">
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <Menu className="Menu"></Menu>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
