import React, { Component } from 'react'
import Dummy from './Dummy'
import moment from 'moment'
import {Link} from 'react-router-dom'





class Weather extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            // allData: JSON.stringify(this.props.allData, null, 2),
            allData:this.props.allData,
            maxTemp:[]

        }
    }

    formatDayCards = () => {
        const dailyData = this.state.allData.list.filter(reading => reading.dt_txt.includes("18:00:00"))
    
       
    // return this.props.max_temperature.map((reading, index) =><div className="card">
     
    
        return dailyData.map((reading, index) =>{

           
            const imgURL = `owf owf-${reading.weather[0].id} owf-5x`
      return  <div className="card">
    
   
    <div className="card-body">
    <h3 className="card-title">{moment(reading.dt_txt).format('dddd')}</h3>
    <h4 className="card-title">{moment(reading.dt_txt).format('MM-DD-YYYY')}</h4>
      
      <i className={`owf owf-${reading.weather[0].id} owf-5x`}></i>
      <p className="card-text">Max Temp: {reading.main.temp_max} °C</p>
      <p className="card-text">Min Temp: {reading.main.temp_min} °C</p>
      <p className="card-text">Weather description: {reading.weather[0].description}</p>
      <Link to = {`/weatherdetailsNew/${moment(reading.dt_txt).format('YYYY-MM-DD')}`} >
      {/* <Link to = "/weatherdetailsNew/"> */}
      <a className="btn btn-primary">Get More Details</a>
      </Link>
    </div>
  </div>  
        }  
      ) 
      }
      changeState=()=>{
        this.setState({
            message : JSON.stringify(this.props.data, null, 2)
        })
    }

    render() {
        return (
            <div>
            
                <div>
                {this.props.max_temperature && this.formatDayCards()}
                {/* {this.props.min_temperature && this.displayMinTemp()} */}



                </div>


                {/* +++++++++++++++++++++++
                {this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Description: {this.props.description}</p>}
                <Dummy data = {this.state.allData}/> */}


            </div>
        )
    }
}

export default Weather
