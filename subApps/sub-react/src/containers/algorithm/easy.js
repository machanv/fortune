import React from 'react';
import './'
class Easy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      l1: '2,4,5',
      l2: '3,0,7',
      total: 0
    }
    this.addTowNumbers = this.addTowNumbers.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  addTowNumbers(l1, l2) {
    let a = parseInt(l1.split(',').reverse().join(''));
    let b = parseInt(l2.split(',').reverse().join(''));
    let c = (a + b).toString().split('');
    this.setState({
      total: c
    })
  }

  onValueChange(event, state) {
    this.setState({
      [state]: event.target.value
    });
    console.log(this.state);
  }

  render() {
    return <div>
      <div>
        <input type="text" value={this.state.l1} onChange={event => this.onValueChange(event, 'l1')}/>
        <input type="text" value={this.state.l2} onChange={event => this.onValueChange(event, 'l2')}/>
      </div>
      <li>
        <button onClick={() => this.addTowNumbers(this.state.l1, this.state.l2)}>两数相加</button>
      </li>
      <div><p>{this.state.total}</p></div>
    </div>
  }
}

export default Easy;
