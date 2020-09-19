import React from 'react'

class Nav extends React.Component{
    render(){
        return(
            <header className="site-header">
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <div className="container">
                    <a className="navbar-brand mr-4" href="/">COVID Data Visualizer</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggle">
                        <div className="navbar-nav mr-auto">
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/tables">Tables</a>
                        <a className="nav-item nav-link" href="/graphs">Graphs</a>
                        </div>
                    </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Nav
