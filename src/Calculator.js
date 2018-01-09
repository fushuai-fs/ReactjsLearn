import React, { Component } from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export  class Calculator extends React.Component {
    constructor(props) {
        super(props);
      //  this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    // handleChange(e) {
    //     this.setState({temperature: e.target.value});
    // }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
    render() {
        {/*<fieldset>*/}
        {/*<legend>Enter temperature in Celsius:</legend>*/}
        {/*<input*/}
        {/*value={temperature}*/}
        {/*onChange={this.handleChange} />*/}

        {/*<BoilingVerdict*/}
        {/*celsius={parseFloat(temperature)} />*/}
        {/*</fieldset>*/}
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (

        <div>
            <TemperatureInput scale="c"  temperature={celsius}
                              onTempChange={this.handleCelsiusChange}  />
            <TemperatureInput scale="f" temperature={fahrenheit}
                              onTempChange={this.handleFahrenheitChange}/>
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
        );
    }

}
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// 将摄氏度转换成华氏度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
//例如，tryConvert('abc', toCelsius)返回一个空字符串，并tryConvert('10.22', toFahrenheit)返回'50.396'。
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
export class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
      //  this.setState({temperature: e.target.value});
        this.props.onTempChange(e.target.value);
    }

    render() {
      //  const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}  onChange={this.handleChange} />
            </fieldset>
        );
    }
}