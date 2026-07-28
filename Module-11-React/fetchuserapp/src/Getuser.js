import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      firstname: '',
      image: '',
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const user = data.results[0];
        this.setState({
          title: user.name.title,
          firstname: user.name.first,
          image: user.picture.large,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { title, firstname, image, loading, error } = this.state;

    if (loading) {
      return <p>Loading user data...</p>;
    }

    if (error) {
      return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return (
      <div style={styles.card}>
        <img src={image} alt={`${title} ${firstname}`} style={styles.image} />
        <h2 style={styles.name}>{title} {firstname}</h2>
      </div>
    );
  }
}

const styles = {
  card: {
    maxWidth: '300px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  name: {
    marginTop: '15px',
    fontSize: '20px'
  }
};

export default Getuser;