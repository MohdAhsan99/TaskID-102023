import React, { Component } from 'react';

class CommentList extends Component {
  state = {
    comments: [],
    filteredComments: [],
  };

  componentDidMount() {
    // Fetch data from the API endpoint
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data }, () => {
          // Display the first 10 records
          this.displayFirst10Records();
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  displayFirst10Records = () => {
    this.setState({ filteredComments: this.state.comments.slice(0, 10) });
  };

  filterComments = () => {
    const keyword = 'Aliquam';
    const filteredComments = this.state.comments.filter((comment) =>
      comment.body.toLowerCase().includes(keyword.toLowerCase())
    );

    this.setState({ filteredComments });
  };

  render() {
    const { filteredComments } = this.state;

    return (
      <div>
        <h1>Comment List</h1>
        <button onClick={this.displayFirst10Records}>Display First 10 Records</button>
        <button onClick={this.filterComments}>Filter by "Aliquam"</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {filteredComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CommentList;
