import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes/mainTheme';

import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';

import { CancelToken } from 'apisauce';
import { getLogin } from './api/apiLogin';
//import { postUser } from './api/apiUser';

const handleClick = async () =>{
  const source = CancelToken.source();
  const responseObject =  await getLogin( source.token);
  console.log(responseObject);
}


function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <NavBar />
        <h1>My Recipe vault project</h1>
        <Button onClick={handleClick}>Do API Call</Button>
        <Error>2nd error message</Error>
        <Button variant="outlined">test</Button>
    </ThemeProvider>    
  );
}

export default App;
