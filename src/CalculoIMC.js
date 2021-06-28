import react, {Component} from 'react';

export default class CalculoIMC extends Component {
    state = {
        peso: "0",
        altura: "0",
        situacao: ""
    }

    calcular() {
        var peso = parseFloat(this.state.peso);
        var altura = parseFloat(this.state.altura)
        var imc = peso / (altura * altura);
        if(imc < 21) {
            this.setState({
                situacao: "magrelo"
            });
        } else if(imc >= 21 && imc < 24) {
            this.setState({
                situacao: "magro"
            });
        } else if(imc >= 24 && imc < 26) {
            this.setState({
                situacao: "em forma"
            });
        } else if(imc >= 26 && imc < 29) {
            this.setState({
                situacao: "gordinho"
            });
        } else if(imc >= 29) {
            this.setState({
                situacao: "gordo"
            });
        }
    }

    render() {
        return(
            <div>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="peso">Peso</label>
                        </td>
                        <td>
                            <input id="peso" onChange={this.handleInput.bind(this)} value={this.state.peso} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="altura">Altura</label>
                        </td>
                        <td>
                            <input id="altura" onChange={this.handleInput.bind(this)} value={this.state.altura} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <label id="situacao">{this.state.situacao}</label>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <button onClick={this.calcular.bind(this)}>Calcular</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

    handleInput(e) {
        this.setState ({
            [e.target.id]: e.target.value
        });
    }
}