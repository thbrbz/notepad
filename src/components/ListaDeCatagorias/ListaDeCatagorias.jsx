import React, { Component } from 'react';
import './estilo.css'

class ListaDeCategorias extends Component {

    _handlerEventoInput(e){
        if (e.key == "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <li className="lista-categorias_item" key={index}>{categoria}</li>;
                    })}
                </ul>
                <input className="lista-categorias_input" type="text" placeholder="Adicionar Categoria" onKeyUp={this._handlerEventoInput.bind(this)} />
            </section>
         );
    }
}
 
export default ListaDeCategorias
