import React from 'react';

const HighestAverages = ({ stats }) => {
  return (
    <div className='container' style={{
      maxWidth:'100%',
      borderRadius:'10px',
      backgroundColor:'white',
      boxShadow: '0px 20px 20px -17px rgb(10, 10, 100, 1.5)',
      }}>        
        <div style={{fontSize: '22px', marginLeft:'20px', marginBottom:'-2.5%', fontWeight: 100, paddingTop: '20px'}}>
          <p>HIGHEST AVERAGES</p>
        </div>
        <table style={{
        backgroundColor:'white',
        padding:'20px',
        marginLeft: '-.2%',
        }}>
        <thead>
          <tr >
            <th class="col-7 smaller">Player</th>
            <th className='col-2'></th>
            <th className="smaller alignRight">M</th>
            <th className="smaller alignRight">Run</th>
            <th className="smaller alignRight">Avg</th>
          </tr>
        </thead>
        <tbody>
          <>
            {stats.highestAverages && stats.highestAverages.length > 0 && stats.highestAverages.map((player) => (
            <>
            <tr>
              <td class="col-7 highlighted" >
                <span className='highlighted'>{player.playerName}</span>
                <br />
                <span className='smaller'>{player.team}</span>
                </td>
                <td className='col-2'></td>
              <td class='alignRight highlighted' >{player.matches}</td>
              <td class='alignRight highlighted' >{player.run}</td>
              <td class='alignRight highlighted' >{player.avg}</td>
            </tr>
            </>
            ))}
          </>
        </tbody>
      
      </table>
    </div>
// 	<div>
// 	<h1>highestAverages</h1>
// 	{stats.highestAverages && stats.highestAverages.length > 0 && stats.highestAverages.map((player) => (
// 	  <>
// 	  <p>{player.playerName}</p>
// 	  <p>{player.matches}</p>
// 	  <p>{player.run}</p>
// 	  <p>{player.avg}</p>
// 	  <p>{player.team}</p>
// 	  </>
// 	))}
//   </div>
  );
}

export default HighestAverages;