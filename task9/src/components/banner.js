import React, { Component } from 'react'
import '../styles/banner.css'
import Content from './content'

export default class banner extends Component {

    state = {
        text: ""
    }


    onChanetext = (e) => {
        this.child.showAlert(e.target.value);
    }



    render() {
        return (
            <div>
                <div className="banner">
                    <div className="banner__title">
                        <p className="banner__title--text">
                            Los Mejores agentes de seguridad
                    </p>
                    </div>
                    <div className="banner__searchbar">
                        <input type="text" className="banner__searchbar--input" placeholder="Buscar por Ubicación" name="findPost" onChange={this.onChanetext} />
                    </div>
                </div>
                <Content ref={element => {this.child = element}}/>
            </div>
        )
    }
}
