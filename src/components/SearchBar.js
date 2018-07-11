import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <Form onSubmit={this.props.handleSubmit}>
           <Form.Group>
             <Form.Input className="search-form" placeholder='Search Recipes (Powered by Edamam)' value={this.props.term} onChange={this.props.handleSearchChange} />
             <Form.Button content='Submit' />
           </Form.Group>
        </Form>
    )
  }
}

export default SearchBar;
