import React from 'react'

class Small extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(<div>
            <div>
                <div className='text-center text-white' style={{background:'#00C8A5'}}>
                     <img src='./Whatsapp.png' alt='copyright Whatsapp' style={{height:'100px',width:'auto',objectFit:'contain'}}/>
                    <div className='h4 font-weight-light mt-4'>Simple. Secure.</div>
                    <div className='h4 font-weight-light'>Reliable messaging.</div>
                    <div className='m-4'>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</div>
                    <div className='btn btn-success rounded-pill px-5 py-3'><h6>DOWNLOAD NOW</h6></div>
                    <br></br>
                    <img className='mt-5' style={{height:'340px',width:'280px',objectFit:'cover',objectPosition:'60% 0%'}} src='https://static.whatsapp.net/rsrc.php/v3/yU/r/aIUMc-wmaFw.png' />
                </div>

                <div className='text-center' style={{background:'#CDEBEA'}}>
                    <div className='text-secondary pt-3 mb-3'><small>* Data charges may apply. Contact your provider for details.</small></div>
                    <div className='h4 font-weight-light my-3'>WhatsApp Business App</div>
                    <div className='mx-4'>WhatsApp Business is a free to download app that built with the small business owner in mind. Create a catalog to showcase your products and services. Connect with your customers easily by using tools to automate, sort and quickly respond to messages.</div>
                    <div className='m-4'>WhatsApp can also help medium and large businesses provide customer support and deliver important notifications to customers. Learn more about WhatsApp Business API.</div>
                    <img className='mt-5' style={{height:'340px',width:'280px',objectFit:'cover',objectPosition:'60% 0%'}} src='https://static.whatsapp.net/rsrc.php/v3/yD/r/XGGxbGw5FZI.png' />
                </div>

                <div className='text-center' style={{background:'#EBF9F5'}}>
                    <img style={{height:'300px',width:'auto',objectFit:'contain'}} src='Pic1.png' className='mt-5'/>
                    <div><small className='text-muted'>END-TO-END ENCRYPTION</small></div>
                    <div className='h4 font-weight-light mt-4'>Security by Default</div>
                    <div className='my-4'>Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.</div>
                </div>

                <div>
                <div className='text-center p-4 m-5'>
                     <div className='btn btn-outline-info rounded-pill px-5 py-4'><h6>EXPLORE FEATURES</h6></div>     
                </div>
            </div>
            </div>
        </div>)
    }
}

export default Small