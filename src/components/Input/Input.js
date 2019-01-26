import React, {Component} from "react"
import "./Input.sass";
import alert from "../../assets/img/alert.jpg"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValidity: true,
            emailMesage: "",
        };
        this.checkValidity = this.checkValidity.bind(this);
    }

    changeState(message) {
        this.setState({emailValidity: false, emailMessage: message})
    }

    checkValidity(e) {
        const value = e.target.value;
        if(value !== "") {
            if (value.indexOf("@") === -1) {
                this.changeState("Email address must contain '@'");
                return;
            }
            if (value.indexOf("@") === 0) {
                this.changeState("Input the part of address before '@'");
                return;
            }
            if (value.slice(-1) === "@") {
                this.changeState("Input the part of address after '@'");
                return;
            }
        }
        this.setState({emailValidity: true, emailMessage: ""});
    }


    render() {
        return (
            <div className={"Input"}>
                <label for={"email"}>Email</label>
                <div>
                    <input id={"email"} onChange={e => this.checkValidity(e)}>
                    </input>
                    <div style={this.state.emailValidity ? {display: "none"} : {display: "flex"}}>
                        <img src={alert}>

                        </img>
                        <div>
                            {this.state.emailMessage}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;