import React, { Component } from 'react';
import GlobalProps from './GlobalProps.json'
export default class FetchTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            netresult:''
        };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <div>
                {'FetchTest'}
                {this.state.netresult}
            </div>
        );
    }
    componentWillUnmount(){

    }
    componentDidMount(){
        fetch(GlobalProps.LoginUrl, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'Method=Login&SupplierCode=63967667&UserName=fushuai&PassWord=1'
        })
         .then((response)=>response.json())
            .then((data)=>{
                   const jsonstr =JSON.stringify(data);
                // this.setState({netresult:JSON.stringify(data)});

                alert('Request succeeded with JSON response\r\n'+jsonstr);
            })
            .catch(function (error) {
                alert('Request failed\r\n'+ error);
            });
    }
}