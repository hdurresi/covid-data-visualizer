import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graphs extends React.Component{
   constructor(props){
        super(props)
        this.state = {
            current: "na",
            index: 0,
            global: false,
            countries: {
                Countries: [{"Country": "n/a", "Date": "n/a", "NewConfirmed": "n/a", "NewDeaths": "n/a", "NewRecovered": "n/a"}],
                Date: "2020-02-10gdsgds",
            },
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.covid19api.com/summary")
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    current: "na",
                    index: 2,
                    global: false,
                    countries: data,
                })
            })
    }

    handleChange(){
        let newVal = document.querySelector("#countries").value
        let newIndex = 0;
        for(let i =0 ;i<this.state.countries.Countries.length; i++){
            if(this.state.countries.Countries[i].CountryCode === newVal){
                newIndex = i
                break
            }
        }
        this.setState((prevState)=>{
            return {
                current: newVal,
                index:  newIndex,
                global: newVal === 'global',
                countries: prevState.countries
            }
        })
    }

    dateToText(date){
        let year = date.substr(0,4)
        let month = date.substr(5,2)
        let day = date.substr(8, 2)
        switch(month){
            case "01": month = "January"; break;
            case "02": month = "February"; break;
            case "03": month = "March"; break;
            case "04": month = "April"; break;
            case "05": month = "May"; break;
            case "06": month = "June"; break;
            case "07": month = "July"; break;
            case "08": month = "August"; break;
            case "09": month = "September"; break;
            case "10": month = "October"; break;
            case "11": month = "November"; break;
            case "12": month = "December"; break;
            default: month = "Invalid"; break;
        }
        return month + " " + day + ", " + year
    }

    render(){
       const options = {
        title: {
            text: {this.state.global?"Global":this.state.countries.Countries[this.state.index].Country}
        },
        data: [{				
                type: "column",
                dataPoints: [
                    { label: "New Confirmed Cases",  y: {this.state.global?this.state.countries.Global.NewConfirmed:this.state.countries.Countries[this.state.index].NewConfirmed}  },
                    { label: "New Deaths", y: {this.state.global?this.state.countries.Global.NewDeaths:this.state.countries.Countries[this.state.index].NewDeaths} },
                    { label: "New Recovered", y: {this.state.global?this.state.countries.Global.NewRecovered:this.state.countries.Countries[this.state.index].NewRecovered}  }
                    
                ]
              }]
        }
        return(
            
            <div className = "graphs-container">
                <h1>Graphs</h1>
                <label>Please Select a Country to view data for:  </label>
                <select name = "countries" id = "countries" onChange = {this.handleChange} className = "selectpicker">
                    <option value = "na" selected = {this.state.current ==='na'?"selected":""}>Select a Country             </option>
                    <option value = "global" selected = {this.state.current === 'global'?"selected":""}>Global</option>
                    {
                        this.state.countries.Countries.map((data)=>{
                             return <option value = {data.CountryCode} selected = {this.state.current === data.CountryCode?"selected":""}>{data.Country}</option>
                        })
                    }
                </select>
                <div>
                <CanvasJSChart options = {options}
       
             </div>
        )
    }
}

export default Graphs
