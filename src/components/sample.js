import React, {Component} from 'react';
import axios from 'axios';

class Sample extends Component{
    constructor(){
        super();
        this.state={ text:''};
    }
    componentDidMount(){
        axios.get('http://localhost:4001/v1/hello').then(res=>{
            debugger;
            if(res&&res.data){
              this.setState({text : res.data})
            }
        }).catch(err=>{
            console.log('error',err);
        });
    }
    render(){
        return(
            <div>{this.state.text}</div>
        )

    }
}
export default Sample;