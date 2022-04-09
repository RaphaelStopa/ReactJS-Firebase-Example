import React, { Component } from 'react';
import { useParams, Link} from "react-router-dom";
import './HeaderComponent.css';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <div className='f-header'>
                <header>
                    <nav className='f-nav'>
                        <Link className='f-link' to={'/main'}>Tela Principal</Link>
                        <Link className='f-link' to={'/'}>Registro</Link>
                        <Link className='f-link' to={'/login'}>Login</Link>
                    </nav>
                </header>
            
            </div>
        );
    }
}

export default HeaderComponent;