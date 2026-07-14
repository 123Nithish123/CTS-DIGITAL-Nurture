import React, { Component } from 'react';
import GitClient from './GitClient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      username: 'techiesyed',
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    GitClient.getRepositories(this.state.username)
      .then(repos => {
        this.setState({ repositories: repos, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { repositories, username, loading, error } = this.state;

    if (loading) {
      return <h2>Loading repositories for {username}...</h2>;
    }

    if (error) {
      return <h2>Error: {error}</h2>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>GitHub Repositories</h1>
        <h2>Repositories for {username}</h2>
        <ul>
          {repositories.map((repo, index) => (
            <li key={index}>{repo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;