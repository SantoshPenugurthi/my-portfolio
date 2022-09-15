import React, { Component } from 'react';
import { BrowserRouter,NavLink,Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

class Navigation extends Component {
    render() {
        return (
            <div className='Nav-main'>
                <div className='Nav-left'>
                    <h2 style={{fontWeight:'bold'}}>santoshweb.com</h2>
                </div>
                <div className='Nav-right'>
                    <BrowserRouter>
                        <NavLink to='/'>
                            <h2>Home</h2>
                        </NavLink>
                        <NavLink to='/about'>
                            <h2>About</h2>
                        </NavLink>
                        <NavLink to='/projects'>
                            <h2>Projects</h2>
                        </NavLink>
                        <NavLink to='/skills'>
                            <h2>Skills</h2>
                        </NavLink>

                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route exact path='/about' element={<About/>} />
                            <Route exact path='/projects' element={<Projects/>} />
                            <Route exact path='/skills' element={<Skills/>} />
                        </Routes>
                        
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Navigation;