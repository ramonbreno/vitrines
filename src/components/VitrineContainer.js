import React from 'react';

import ProductInfo from './ProductInfo';
let dados = [];
let referencia = []
export default class VitrineContainer extends React.Component {

    loadCarregar(){
        const valores = this.props.dados;
        valores.map(item => {
            dados = item
        });
        this.props.referencia.map(item => {
            referencia = item.item
        })
    }
    setInfoProduct(data){
        this.setState({
            infoProduct: data
        });
    }
    render(){
        this.loadCarregar();

        {console.log(referencia)}
        return(
            <div className="meu-app">
                <h1 className="titulo">Você visitou:</h1>
                <div className="referencia">
                    <article className='meu-servico'>
                        <img className='icone' src={referencia['imageName']}/>
                        <div className="title">{referencia['name']}</div>
                        <div className="de">de: <span className="deItem">{referencia['oldPrice']}</span></div>
                        <div className='por'>Por: <span className="porItem">{referencia['price']}</span></div>
                    </article>
                </div>
                <div>
                    <h1 className="titulo">E se interesse por:</h1>
                    {
                        dados.map((item) =>
                            <article className='servico'>
                                <img className='icone' src={item.imageName}/>
                                <div className="title">{item.name}</div>
                                <div className="de">de: <span className="deItem">{item.oldPrice}</span></div>
                                <div className='por'>Por: <span className="porItem">{item.price}</span></div>
                                <ProductInfo info={item.productInfo}/>
                            </article>
                        )
                    }
                </div>
             </div>
        );
    }
}
