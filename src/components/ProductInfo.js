import React from 'react';

export default class ProductInfo extends React.Component{

    render(){
        const dados = this.props.info;

        return <span className="parcela">{dados['paymentConditions']}</span>;
    }
}
