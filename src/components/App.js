import React from 'react';
import axios from 'axios';

import VitrineContainer  from './VitrineContainer';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            produtos: [],
        };
    }
    componentDidMount(){
        const url = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';
        const headers = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        };
        axios.get(url, headers).then(res => {
            const person = res.data.toString();
            const minhaString = person.substr(1,person.length).replace('({','[{').replace('});','}]')

            this.setState({
                produtos: JSON.parse(minhaString)
            });
        });
    }
    render(){
        const dados = this.state.produtos.map((item, x) => {
            return item.data
        });

        return <VitrineContainer
            dados={dados.map(item => {
                return item.recommendation
            })}
            referencia={dados.map(item => {
                return item.reference
            })}
        />;
    }
}
