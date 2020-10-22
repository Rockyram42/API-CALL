import React, { Component } from 'react'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            item: null
        }
    }
    // async componentDidMount() {
    //     const item = (await axios.get('https://reqres.in/api/login')).data;
    //     this.setState({
    //         item,
    //     });
    //   }

    componentDidMount(){
        var self = this
        axios.get(`https://reqres.in/api/login`)
        .then(function(res){
            self.setState({
                item : res.data
            })
           console.log(res);
           
        })
        .catch(function(error){
            console.log(error);
            
        })
    }  

    render() {
        console.log(this.state.item)
        let reslt =  this.state.item

        console.log(reslt);        
        return (
            <div>
{/*             
                {this.state.item && this.state.item.data.map((item, index) => {
                    return(
                        <div>
                            <div>{item.name}</div>
                            <div>{item.year}</div>
                            <div>{item.pantone_value}</div>
                        </div>
                    )
                }) } */}
            </div>
        )
    }
}
