import React, { Component } from 'react';
import OrigemService from '../../services/OrigemService';


class ListOrigem extends Component {
    constructor(props) {
        super(props)

        this.state = {
                origem: []
        }

    }


    componentDidMount(){
        OrigemService.getOrigem().then((res) => {
            this.setState({ origem: res.data});            
        });
    }


    render() {
        return (
            <div>                       
                <datalist id="data-origem" >

                    {
                        
                        this.state.origem.map(
                            origem => <option key = {origem.id}>{origem.origemPais} - {origem.origemCidade}</option>    
                        )
                    } 
                </datalist>    
            </div>
        )
    }
}

export default ListOrigem