import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

const TwitterDetailsPage = () => {
  const token = localStorage.getItem("twitterAccessToken");
  const accessToken = token ? JSON.stringify(token) : {};
  const [data, setData ] = useState(null);
  console.log(accessToken);

  useEffect(
    () => {
        if (accessToken) {
            axios
                .get(`https://api.twitter.com/2/users/128981256`, {
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:5173',
                        'Access-Control-Allow-Credentials': true,
                        Authorization: `Bearer 128981256-fW6dyxXP81OkuU8WgME2oCyrbqdqc7h31oCmXrkx:3GaHa6r85LOtRZztVqGsk8EUeNmGwT1BydpPkXDWvT7Fx`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ accessToken ]
  );

  function getTitleCase(text: String) {
    if(text) {
      const result = text.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return finalResult;
    } else {
      return text;
    }
  }

  // `map` over the first object in the array
  // and get an array of keys and add them
  // to TH elements
  function getHeadings(data: any) {
    return Object.keys(data).map((key, index) => {
      if (index !== 0 && index !== 6){
        return <th key={index}>{getTitleCase(key)}</th>;
      }
    });
  }

  // `map` over the data to return
  // row data, passing in each mapped object
  // to `getCells`
  function getRows(data: any) {
    return <tr>{getCells(data)}</tr>;
  }

  // Return an array of cell data using the
  // values of each object
  function getCells(obj: any) {
    return Object.values(obj).map((value: any, index) => {
      if (index !== 0 && index !== 6){
        return <td key={index}>{value}</td>;
      }
    });
  }

  return (
    <div>
      <Link to="/integrations">Back</Link>
      <div className="content">
        <h4>
          Twittter Account
        </h4>
      {/* {data ? JSON.stringify(data): null} */}
      {data ? 
          <table>
            <thead>{getHeadings(data)}</thead>
            <tbody>{getRows(data)}</tbody>
          </table>
        : 'Loading...'}
      </div>
    </div>
  )
}

export default TwitterDetailsPage