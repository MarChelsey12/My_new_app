import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes/mainTheme';

import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import CollectSelectMenu from './components/CollectSelectMenu';

import { CancelToken } from 'apisauce';
//import { getLogin } from './api/apiLogin';
//import { postUser } from './api/apiUser';
//import { putUser } from './api/apiUser';
import { deleteUser } from './api/apiUser';

import LoginForm from './forms/LoginForm';
import CollectForm from './forms/CollectForm';


const handleClick = async () =>{
  const source = CancelToken.source();
  const responseObject =  await deleteUser( source.token);
  console.log(responseObject);
}

//'E', {username:'test', email:'test@test.com', password:'abc'}

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <NavBar />
        <h1>My Recipe vault project</h1>
        <Button onClick={handleClick}>Do API Call</Button>
        <Error>2nd error message</Error>
        {/* <Button variant="outlined">test</Button> */}
        <CollectSelectMenu />
        {/* <LoginForm />
        <CollectForm /> */}
    </ThemeProvider>    
  );
}

export default App;
