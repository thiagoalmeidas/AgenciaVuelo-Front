import React, { Component } from 'react';
import destinoService from '../../services/DestinoService';


class ListDestino extends Component {
    constructor(props) {
        super(props)

        this.state = {
                destino: []
        }

    }


    componentDidMount(){
        destinoService.getDestino().then((res) => {
            this.setState({ destino: res.data});            
        });
    }


    render() {
        return (
            <div>                       
                <datalist id="data-destino" >

                    {
                        
                        this.state.destino.map(
                            destino => <option key = {destino.id}>{destino.destinoPais} - {destino.destinoCidade}</option>    
                        )
                    } 
                </datalist>    
            </div>
        )
    }
}

export default ListDestino