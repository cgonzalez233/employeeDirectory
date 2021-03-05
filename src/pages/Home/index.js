import React from "react";
import API from "../../utils/API";
import Table from "../../components/Table";

export default class Home extends React.Component {
  state = {
    search: "",
    users: [],
  };
  componentDidMount() {
    API.searchTerms().then((res) => this.setState({ users: res.data.results }));
  }

  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Employee Directory</h1>
          </div>
        </div>

        <Table users={this.state.users}></Table>
      </div>
    );
  }
}
