import React, { Component } from 'react'
import '../styles/footer.css'

export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__rigths">
                    <p className="footer__rigths--text">
                        Desarrollado por Akurey.com Todos los derechos reservados.
                    </p>
                </div>
                <div className="footer__terms">
                    <a href="#" className="footer__terms--link">Terminos y condiciones</a>
                </div>
            </div>
        )
    }
}
