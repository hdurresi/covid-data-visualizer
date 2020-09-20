import React from 'react'

/*var countries = []
console.log("adfafaasfdaf")
fetch("https://api.covid19api.com/summary")
    .then((data) => data.json())
    .then((data) => {
        //this.setState({
            countries = data
        //})
    })
*/
class Tables extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countries: {
                Countries: [],
            },
        }
    }

    componentDidMount(){
        fetch("https://api.covid19api.com/summary")
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    countries: data,
                })
            })
    }

    render(){
        let arr = [1,2,3,4,5]
        for(let i =0; i<400; i++){
            arr.push(i)
        }
        console.log(arr)
        //console.log(this.state.countries.Countries)
        return(
            <div className = "tables-container">
                <h1>Tables</h1>
                <label>Please Select a Country to view data for:  </label>
                <select name = "countries" id = "countries">
                    <option selected = "selected">Select a Country</option>
                    {
                        this.state.countries.Countries.map((data)=>{
                             return <option>{data.Country}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default Tables