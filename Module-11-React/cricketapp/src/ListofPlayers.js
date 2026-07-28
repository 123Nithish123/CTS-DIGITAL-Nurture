import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 72 },
    { name: 'Shubman Gill', score: 45 },
    { name: 'KL Rahul', score: 68 },
    { name: 'Shreyas Iyer', score: 30 },
    { name: 'Rishabh Pant', score: 55 },
    { name: 'Hardik Pandya', score: 40 },
    { name: 'Ravindra Jadeja', score: 62 },
    { name: 'Mohammed Shami', score: 15 },
    { name: 'Jasprit Bumrah', score: 10 },
    { name: 'Yuzvendra Chahal', score: 22 }
  ];

  const filteredPlayers = players.filter((player) => player.score < 70);

  return (
    <div className="list-container">
      <h2>All Players</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Players with Scores Below 70</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListofPlayers;