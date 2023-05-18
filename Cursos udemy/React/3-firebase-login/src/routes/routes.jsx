import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Login } from '../components/login/Login';
import { Home } from '../components/Home/Home';
import {Signup} from '../components/Signup/Signup';


export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    )   
    }