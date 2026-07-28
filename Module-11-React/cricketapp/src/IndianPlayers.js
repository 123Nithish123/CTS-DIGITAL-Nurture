import React from 'react';

const IndianPlayers = () => {
  const team = [
    'Virat Kohli',
    'Rohit Sharma',
    'Shubman Gill',
    'KL Rahul',
    'Shreyas Iyer',
    'Rishabh Pant',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'Axar Patel',
    'Mohammed Shami',
    'Jasprit Bumrah'
  ];

  const [odd, even] = [
    team.filter((_, i) => i % 2 === 0),
    team.filter((_, i) => i % 2 !== 0)
  ];

  const [odd1, odd2, odd3, odd4, odd5, odd6] = odd;
  const [even1, even2, even3, even4, even5] = even;

  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Suryakumar Yadav', 'Hardik Pandya', 'Jasprit Bumrah'];
  const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Hanuma Vihari', 'Wriddhiman Saha', 'Ravichandran Ashwin'];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="indian-container">
      <h2>Indian Players - Odd Team</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
        <li>{odd4}</li>
        <li>{odd5}</li>
        <li>{odd6}</li>
      </ul>

      <h2>Indian Players - Even Team</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
        <li>{even4}</li>
        <li>{even5}</li>
      </ul>

      <h2>T20 Players</h2>
      <ul>
        {T20players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Ranji Trophy Players</h2>
      <ul>
        {RanjiTrophyPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;