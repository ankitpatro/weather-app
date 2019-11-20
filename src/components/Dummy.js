import React, { Component } from 'react'
class Dummy extends Component {
    // constructor(props) {
    //     super(props)
    //    this.state={

    //     data: "Mayank"

    // }

    // }

    constructor(props) {
        super(props)

        this.state = {
            data: "Ankit"
        }
    }


    getData() {

        this.setState({
            data: this.props.data
        })

    }

    componentDidMount() {
        console.log("hi")
        this.getData();
    }

    componentWillMount() {
        console.log('First this called');
    }

    render() {

        console.log(this.state.data);
        return (
            <div>
                <h1>{this.state.data}</h1>
                <h1>  {JSON.stringify(this.props.data, null, 2)} </h1>



                {/* console.log({this.props.data.list[0].main.temp_max}) */}

                {/* <p>{item.list[0].dt_txt}</p>  */}
            </div>
        )
    }
}

export default Dummy
