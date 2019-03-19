import React, { Component } from 'react';

class Contador extends Component {
    state = { 
        cont:0        
     }
     
     handleIncremento=()=>{
     this.setState({cont:this.state.cont+1});
     }

    render() { 
  

        return ( 
        <div>
            <span className={this.claseBadge()}>{this.formatCondicion()}</span>
            <button onClick={this.handleIncremento} className="btn btn-info">Incrementar</button>
        </div> );
    }

    claseBadge() {
        let clase = 'badge m-2 badge-';
        clase += this.state.cont === 0 ? "danger" : 'info';
        return clase;
    }

    formatCondicion(){
        return this.state.cont===0?"CERO":this.state.cont;
    }
}
 
export default Contador;