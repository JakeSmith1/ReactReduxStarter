import React from 'react';
import { Button, Col, Row, Grid, FormGroup, FormControl, Navbar, ControlLabel, Checkbox, Radio, HelpBlock } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToList } from '../../actions/list';
import { browserHistory } from 'react-router';

//returns bootstrap form
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class CreateList extends React.Component {
  constructor(props) {
    super(props);
    //bindings for all the functions
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImportantChange = this.handleImportantChange.bind(this);
    this.handleListItemChange = this.handleListItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      date: new Date().toISOString(),
      important: 'yes',
      name: '',
      content: ''
    };
  }

  //setting the nicer date so it's readable
  componentWillMount() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let niceDate = new Date().toISOString().split('T')[0].split('-');
    let year = niceDate[0];
    let month = months[Number(niceDate[1])-1]
    let nicerDate = `${month} ${niceDate[2]}, ${year}`;
    this.setState({date: nicerDate });
  }

  //All the props from the submit form
  handleSubmit(e) {
    e.preventDefault();
    this.props.addToList({
      name: this.state.name,
      important: this.state.important,
      content: this.state.content
    })
    // browserHistory.push('/dashboard');
  }

  handleNameChange(e) {
    this.setState({name: e.currentTarget.value});
  }

  handleListItemChange(e) {
    this.setState({content: e.currentTarget.value});
  }

  handleImportantChange(e) {
    this.setState({important: e.currentTarget.value});
  }

  render() {
    return (
      <div className="list-form">
        <h1 className="create-list-title">Create a List Entry {this.state.date}</h1>
        <form onSubmit={this.handleSubmit} data-toggle='validator'>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Name of List Item</ControlLabel>
            <FormControl
              value={this.state.name}
              onChange={this.handleNameChange}
              componentClass="input"
              placeholder="What is the name of your List Item"
              required='true'/>
            </FormGroup>


            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>List Item:</ControlLabel>
              <FormControl
                value={this.state.content}
                onChange={this.handleListItemChange}
                componentClass="textarea"
                placeholder="What is the content of your list"
                required='true'/>
              </FormGroup>

              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Is this List Item Important?</ControlLabel>
                <select
                  noValidate
                  value={this.state.important}
                  onChange={this.handleImportantChange}
                  className='selectpicker'
                  title="yes or no"
                  data-max-options="1"
                  required='true'>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </FormGroup>
              <Button type="submit">
                Submit
              </Button>
         </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addToList}, dispatch);
}

function mapStateToProps(state) {
  return {
    list: state.reducers.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
