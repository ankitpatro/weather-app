import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'


  const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };

 class WeatherDetails extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             id: this.props.match.params.id,
             allData:this.props.currentStep
              
         }
         console.log(this.props.match.params.id)
     }

     formatDayCards = () => {
        const dailyData = this.state.allData.list.filter(reading => reading.dt_txt.includes(this.state.id))
    
       
    // return this.props.max_temperature.map((reading, index) =><div className="card">
     
    
        return dailyData.map((reading, index) =>{

           
            const imgURL = `owf owf-${reading.weather[0].id} owf-5x`
      return  <div className="card">
    
   
    <div className="card-body">
    <h3 className="card-title">{reading.dt_txt}</h3>
    <h3 className="card-title">{moment(reading.dt_txt).format('dddd')}</h3>
    <h4 className="card-title">{moment(reading.dt_txt).format('MM-DD-YYYY')}</h4>
      
      <i className={`owf owf-${reading.weather[0].id} owf-5x`}></i>
      <p style={pStyle} className="card-text">Max Temp: {reading.main.temp_max} °C</p>
      <p style={pStyle} className="card-text">Min Temp: {reading.main.temp_min} °C</p>
      <p style={pStyle} className="card-text">Weather description: {reading.weather[0].description}</p>
      {/* <Link to = {`/weatherdetailsNew/${index}`} > */}
      {/* <Link to = "/weatherdetailsNew/"> */}
      {/* <a className="btn btn-primary">Go somewhere</a>
      </Link> */}
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
            {this.props.match && this.formatDayCards()}
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

export default WeatherDetails
