import React, { Component } from 'react'

 class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit= {this.props.getWeather}>
                    <input type="text" name= "city" placeholder= "Enter City Name ..." required></input>
                    <input type="text" name= "country" placeholder= "Enter Country ..." required></input>
                    <button class = "searchButton">Get Weather Report</button>
                </form>
            </div>
        )
    }
}

export default Form
