import React from 'react'

class Graphs extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "graphs-container">
                <h1>Graphs</h1>
                <div className = "canva"></div>
            </div>
        )
    }
}

export default Graphs