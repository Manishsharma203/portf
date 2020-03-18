import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='bg-dark'>

                <div className='container'>
                    <div className='text-white row'>
                        <div className='col my-4'>
                            <div><small>WHATSAPP</small></div>
                            <br></br>
                            <div><small>Features</small></div>
                            <div><small>Security</small></div>
                            <div><small>Download</small></div>
                            <div><small>WhatsApp Web</small></div>
                            <div><small>Business</small></div>
                        </div>
                        <div className='col my-4'>
                            <div><small>COMPANY</small></div>
                            <br></br>
                            <div><small>About</small></div>
                            <div><small>Careers</small></div>
                            <div><small>Brand Center</small></div>
                            <div><small>Get in touch</small></div>
                            <div><small>Blog</small></div>
                            <div><small>WhatsApp Stories</small></div>
                        </div>
                        <div className='col my-4'>
                            <div><small>DOWNLOAD</small></div>
                            <br></br>
                            <div><small>Mac/PC</small></div>
                            <div><small>Android</small></div>
                            <div><small>Windows Phone</small></div>
                            <div><small>iPhone Web</small></div>
                        </div>
                        <div className='col my-4'>
                            <div><small>HELP</small></div>
                            <br></br>
                            <div><small>FAQ</small></div>
                            <div><small>Twitter</small></div>
                            <div><small>Facebook</small></div>
                        </div>
                    </div>
                    <div className='text-white row my-4'>
                        <div className='col-3 text-secondary'><small>2020 © WhatsApp Inc.</small></div>
                        <div className='col-3 mb-4'><small>Privacy & Terms</small></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer