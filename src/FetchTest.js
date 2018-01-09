import React, { Component } from 'react';

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
        fetch('http://172.16.1.51:93/App/Supplier.ashx?Type=1', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'Method=Login&SupplierCode=63967667&UserName=fushuai&PassWord=1'
        })
        // .then(response)
            .then(function (data) {
                  const jsonstr =JSON.stringify(data);
                // this.setState({netresult:JSON.stringify(data)});
                alert('Request succeeded with JSON response\r\n'+jsonstr);
            })
            .catch(function (error) {
                alert('Request failed\r\n'+ error);
            });
    }
}