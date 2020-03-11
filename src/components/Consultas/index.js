import React, { Component } from 'react' 

export default class Consultas extends Component {
    constructor(props){
        super(props);
        this.state = {
            realizadas : [],
            marcadas : []
        }
    }

    componentDidMount() {
        fetch('http://www.devup.com.br/php/api-dashboard/api/resumo')
        .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }
    
    render() {
        return(
            <div></div>
        )
    }
}