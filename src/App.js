import SideNavBar from './SideNavBar/sideNavBar';
import Wetatoch from './components/wetatoch/wetatoch';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="App">
      <SideNavBar />


    </div>
    </LocalizationProvider>
  );
}

export default App;
