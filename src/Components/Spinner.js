import React,{Component} from "react";
import loading from './lodingSpinner.gif'

export default class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
                <img src={loading} alt="loding" style={{height:"75px",width:"70px"}}/>
            </div>
        )
    }
}