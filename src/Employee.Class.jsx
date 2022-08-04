import { Component } from "react";

class Employees extends Component {
    constructor(prpos){
        super()
    }
    render(){
        return(
            <div>
                <h1>{this.prpos.F_name}
                    {this.prpos.L_name}
                    {this.prpos.B_date}
                    {this.prpos.Image}
                </h1>
            </div>
        )
    }
}
export default Employees 