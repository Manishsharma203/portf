import React from 'react'

class Navbar2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(<div>
            <nav className="navbar navbar-expand-md navbar-dark text-white py-4" style={{background:'#00C8A5'}}>
                <div className='navbar-brand'>
                </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-5">
                        <li><small className='font-weight-bold'>WHATSAPP WEB</small></li>
                    </ul>
                    <div class="dropdown-divider"></div>
                    <ul className="navbar-nav mx-5">
                        <li><small className='font-weight-bold'>FEATURED</small></li>
                    </ul>
                    <div class="dropdown-divider"></div>
                    <ul className="navbar-nav mx-5">
                        <li><small className='font-weight-bold'>DOWNLOAD</small></li>
                    </ul>
                    <div class="dropdown-divider"></div>
                    <ul className="navbar-nav mx-5">
                        <li><small className='font-weight-bold'>SECURITY</small></li>
                    </ul>
                    <div class="dropdown-divider"></div>
                    <ul className="navbar-nav mx-5">
                        <li><small className='font-weight-bold'>FAQ</small></li>
                    </ul>
                    <div class="dropdown-divider"></div>
                    <ul className="navbar-nav ml-5">
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="">
                            <small className='font-weight-bold text-white'><i class="material-icons mx-2" style={{fontSize:'18px'}}>language</i>EN</small></a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">English</a>
                                <a className="dropdown-item" href="#">Español</a>
                                <a className="dropdown-item" href="#">Français</a>
                                <a className="dropdown-item" href="#">Gaeilge</a>
                                <a className="dropdown-item" href="#">Hrvatski</a>
                                <a className="dropdown-item" href="#">Hindi</a>
                            </div>
                        </li>
                    </ul>
                    </div>
                </nav>
        </div>)
    }
}

export default Navbar2