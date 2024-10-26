import { useState } from "react";

function FinnhubPage() {
  const [data, setData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [isSummary, setIsSummary] = useState(false);
  const [symbol, setSymbol] = useState("");

  function fetchData() {
    fetch('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=coq8fo1r01qoo31t1qtgcoq8fo1r01qoo31t1qu0')
    // fetch('https://finnhub.io/api/v1/stock/profile?symbol=AAPL&token=coq8fo1r01qoo31t1qtgcoq8fo1r01qoo31t1qu0')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  };

  function fetchDetailData() {
    fetch('https://finnhub.io/api/v1/stock/profile?symbol=' + symbol + '&token=coq8fo1r01qoo31t1qtgcoq8fo1r01qoo31t1qu0')
      .then(response => response.json())
      .then(json => setDetailData(json))
      .catch(error => console.error(error));
  }

  function getTitleCase(text: String) {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }


  // `map` over the first object in the array
  // and get an array of keys and add them
  // to TH elements
  function getHeadings(data: {}[]) {
    return Object.keys(data[0]).map((key, index) => {
      if(index === 1 || index === 7 || index === 9){
        return <th>{getTitleCase(key)}</th>;
      }
    });
  }

  // `map` over the data to return
  // row data, passing in each mapped object
  // to `getCells`
  function getRows(data: any[]) {
    return data.map((obj: any, index) => {
      return <tr key={index}>{getCells(obj)}</tr>;
    });
  }

  // Return an array of cell data using the
  // values of each object
  function getCells(obj: any) {
    return Object.values(obj).map((value: any, index) => {
      if(index === 1 || index === 7 || index === 9){
        return <td key={index}>{value}</td>;
      }
    });
  }

  function summary() {
    setIsSummary(true);
    if(!data)
    fetchData();
  }

  function detail() {
    setIsSummary(false);
    fetchDetailData();
  }

  return (
    <div>
      <h4>US Stock Exchange</h4>
      <div>
        <button onClick={() => summary()}>Summary</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => setIsSummary(false)}>Details</button>
      </div>
      <div className="content">
        {
        isSummary ?
        data ? 
          <table>
            <thead>{getHeadings(data)}</thead>
            <tbody>{getRows(data)}</tbody>
          </table>
        : 'Loading...'
        : <div>
          <input placeholder="Enter Stock Symbol" onChange={(e) => setSymbol(e.target.value)} value={symbol}/>&nbsp;&nbsp;&nbsp;
          <button onClick={() => detail()}>Details</button>
          {
            detailData ?
            <div>
              {JSON.stringify(detailData)} 
              </div> : ""
            
          }
        </div>
      }
      </div>
    </div>
  )
}

export default FinnhubPage
