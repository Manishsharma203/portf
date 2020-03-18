import React from 'react'

class Large extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <div className='container d-flex flex-row justify-content-center mt-5 py-5'>
                <div className='col-5 my-5 py-5'>
                    <div className='h2 font-weight-light mt-5'>Simple. Secure.</div>
                    <div className='h2 font-weight-light'>Reliable messaging.</div>
                    <div className='text-secondary mt-4 mb-2'>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</div>
                    <div><small className='text-muted'>* Data charges may apply. Contact your provider for details.</small></div>
                    <div className='my-5'>
                        <div className='text-info my-3'><i class="material-icons mx-2" style={{fontSize:'15px'}}>android</i> Andriod</div>
                        <div className='text-info my-3'><i class="material-icons mx-2" style={{fontSize:'15px'}}>tablet</i> iPhone</div>
                        <div className='text-info my-3'><i class="material-icons mx-2" style={{fontSize:'15px'}}>desktop_windows</i> Mac or Windows PC</div>
                        <div className='text-info my-3'><i class="material-icons mx-2" style={{fontSize:'15px'}}>developer_board</i> Windows Phone</div>
                    </div>
                </div>
                <div className='col-4 mt-5'>
                    <img style={{height:'640px',width:'auto',objectFit:'contain'}} src='https://static.whatsapp.net/rsrc.php/v3/yU/r/aIUMc-wmaFw.png' />
                </div>
            </div>

            <div className='container-fluid d-flex flex-row'>
                <div style={{background:'#CDEBEA'}} className='text-center col-6 mr-4'>
                    <div className='px-5 pt-5' >
                        <div className='h4 font-weight-light mt-5'>WhatsApp Business App</div>
                        <div className='my-4'><a href='#'>WhatsApp Business</a> is a free to download app that built with the small business owner in mind. Create a catalog to showcase your products and services. Connect with your customers easily by using tools to automate, sort and quickly respond to messages.</div>
                        <br></br>
                        <div>WhatsApp can also help medium and large businesses provide customer support and deliver important notifications to customers. Learn more about <a href='#'>WhatsApp Business API</a>.</div>
                        <img className='mt-5' style={{height:'340px',width:'280px',objectFit:'cover',objectPosition:'60% 0%'}} src='https://static.whatsapp.net/rsrc.php/v3/yD/r/XGGxbGw5FZI.png' />
                    </div>
                </div>
                
                 <div style={{background:'#EBF9F5'}} className='text-center col-6'>
                     <div className='p-5 my-4'>
                    <img style={{height:'300px',width:'auto',objectFit:'contain'}} src='Pic1.png'/>
                     <div><small className='text-muted'>END-TO-END ENCRYPTION</small></div>
                     <div className='h4 font-weight-light mt-4'>Security by Default</div>
                     <div>Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.</div>   
                   </div>
                </div>
            </div>

            <div>
                <div className='text-center p-4 m-5'>
                     <div className='btn btn-outline-info rounded-pill px-5 py-4'><h6>EXPLORE FEATURES</h6></div>     
                </div>
            </div>



        </div>)
    }
}

export default Large