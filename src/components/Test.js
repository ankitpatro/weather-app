import React, { Component } from 'react'

 class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Initial message"
        }
    }

    changeState=()=>{
        this.setState({
            message : JSON.stringify(this.props.data, null, 2)
        })
    }
    

    render() {
        return (
            <div>
                {/* Test {this.props.data}<br></br> */}
                {this.state.message}
             <p>   Removing JSON</p>
                
<button onClick = {this.changeState}></button>
            </div>
        )
    }
}

export default Test
