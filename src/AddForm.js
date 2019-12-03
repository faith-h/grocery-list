import React from 'react';

class AddForm extends React.Component {
  state = { name: '' }

// store value from input field in state
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

// prevent form from refreshing page on submit
// also clears input field with set state
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
        value={name}
        name="name"
        onChange={this.handleChange}
        required
        placeholder="Add A Grocery"
        />
      </form>
    );
  };
};

export default AddForm;