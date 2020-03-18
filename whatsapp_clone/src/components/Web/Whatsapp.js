import React from 'react'
import Navbar from './Navbar'
import Small from './Small'
import Footer from './Footer'
import Navbar2 from './Navbar2'
import Large from './Large'
import FooterSmall from './FooterSmall'

class Whatsapp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
          }
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };  


    render() {
        if (this.state.width>768){
            return (
                <div>
                    <Navbar/>
                    <Large/>
                    <Footer/>
                </div>    
                    )
        }
        else{
            return (
                <div>
                    <Navbar2/>
                    <Small/>
                    <FooterSmall/>
                </div>    
                    )
        }
    }
}
        
export default Whatsapp