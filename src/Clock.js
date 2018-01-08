import React, { Component } from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            hello:'你好'
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        this.setState((prevState, props) => ({
            hello: prevState.hello +' '+ props.Name
        }));

    }

    componentWillUnmount() {
        clearInterval(this.timerID); // 定义ID然后再删除，官方做法       不这样做会怎样？？？？

    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.hello}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }


}