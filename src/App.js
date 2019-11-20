import React from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Dummy from './components/Dummy'
import Test from './components/Test'
import WeatherDetails from './components/WeatherDetails'
import weatherInfo from './components/weatherInfo'

const API_KEY = 'b7edb48db1629174143a273ca6d9456f'
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    allData: undefined,
    max_temperature: [],
    min_temperature: []

  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country},id=524901&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
    console.log(`Temperature:${data.list[0].main.temp}`)
    console.log(data.city.name)
    console.log(data.city.country)
    console.log(data.list[0].weather[0].description)
    this.setState({
      temperature: data.list[0].main.temp,
      city: data.city.name,
      country: data.city.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description,
      error: "",
      allData: data,
      max_temperature: [data.list[0].main.temp_max, data.list[8].main.temp_max, data.list[15].main.temp_max, data.list[23].main.temp_max, data.list[31].main.temp_max],
      min_temperature: [data.list[0].main.temp_min, data.list[8].main.temp_min, data.list[15].main.temp_min, data.list[23].main.temp_min, data.list[31].main.temp_min]

    });
    console.log(this.state.allData)


  }

  render() {
    return (
      <BrowserRouter>
      <div>
      {/* <Route path = "/" exact component ={Weather}></Route> */}
      
      <Route path = "/weatherdetailsNew/:id" exact render = {(routeProps)=>(<WeatherDetails {...routeProps} currentStep = {this.state.allData}/>)}></Route>

      {/* <Route path = "/weatherdetailsNew/:id" exact component ={(props) => <weatherInfo {...props} currentStep = {this.state.allData}/>}></Route>  */}

      {/* <Route path = "/weatherdetailsNew: id" exact component ={WeatherDetails}></Route> */}

      {/* <Route path = "/weatherdetailsNew/:id" exact component= {weatherInfo}></Route> */}

      
      
      <Route path = "/" exact component ={Weather}>
      
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Title></Title>

                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}></Form>
                    {/* <Test data = {this.state.allData}/>
                  */}
                    {this.state.allData &&
                      <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                        max_temperature={this.state.max_temperature}
                        min_temperature={this.state.min_temperature}
                        allData={this.state.allData}
                       
                      ></Weather>}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App