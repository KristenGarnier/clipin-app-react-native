import React, {SwitchAndroid, Component} from 'react-native';

class Switch extends Component {
  constructor (props) {
    super(props);

    this._onValueChange = this._onValueChange.bind(this);

    if (this.props.value) {
      this.state = {
        value: this.props.value
      }
    } else {
      this.state = {
        value: false
      }
    }

  }

  _onValueChange (value) {
    this.setState({
      value: value
    });
    if(this.props.name){
      this.props.onValueChange(value, this.props.name);
    }else {
      this.props.onValueChange(value);
    }
  }

  render () {
    return (
      <SwitchAndroid
        onValueChange={this._onValueChange}
        value={this.state.value}
      />
    )
  }
}

export default Switch;