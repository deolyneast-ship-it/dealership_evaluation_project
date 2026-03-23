import React, { useState, useEffect } from 'react';
import "./Dealers.css";
import { useParams } from 'react-router-dom';

const Dealers = () => {
  const [dealersList, setDealersList] = useState([]);
  const [states, setStates] = useState([]);

  const get_dealers = async () => {
    const res = await fetch("/djangoapp/get_dealers");
    const retobj = await res.json();
    if(retobj.status === 200) {
      setDealersList(retobj.dealers);
      let statesArr = Array.from(new Set(retobj.dealers.map(d => d.state)));
      setStates(statesArr);
    }
  };

  useEffect(() => {
    get_dealers();
  }, []);

  const filterDealers = async (state) => {
    const res = await fetch(`/djangoapp/get_dealers/${state}`);
    const retobj = await res.json();
    if(retobj.status === 200) {
      setDealersList(retobj.dealers);
    }
  };
const Dealers = () => {
  // Mock data so it shows up on your Vercel deployment immediately
  const allDealers = [
    { id: 1, full_name: "Example Toyota", city: "New York", state: "New York", address: "1st Ave" },
    { id: 2, full_name: "Gauteng Motors", city: "Johannesburg", state: "Gauteng", address: "Main St" }
  ];

  const [dealers, setDealers] = useState(allDealers);

  const filterState = (state) => {
    if (!state) setDealers(allDealers);
    else setDealers(allDealers.filter(d => d.state === state));
  };

  return (
    <div className="container mt-4">
      <h2>Dealerships</h2>
      <select className="form-select mb-3" onChange={(e) => filterState(e.target.value)}>
        <option value="">Filter by State</option>
        <option value="New York">New York</option>
        <option value="Gauteng">Gauteng</option>
      </select>
      <table className="table">
        <thead>
          <tr><th>Name</th><th>City</th><th>State</th></tr>
        </thead>
        <tbody>
          {dealers.map(d => (
            <tr key={d.id}>
              <td><a href={`/dealer/${d.id}`}>{d.full_name}</a></td>
              <td>{d.city}</td><td>{d.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
  return(
    <div>
      <div className="filter-section">
        <select onChange={(e) => filterDealers(e.target.value)}>
          <option value="">All States</option>
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>City</th><th>Address</th><th>Zip</th><th>State</th>
          </tr>
        </thead>
        <tbody>
          {dealersList.map(dealer => (
            <tr key={dealer.id}>
              <td>{dealer.id}</td>
              <td><a href={'/dealer/'+dealer.id}>{dealer.full_name}</a></td>
              <td>{dealer.city}</td><td>{dealer.address}</td><td>{dealer.zip}</td><td>{dealer.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Dealers;
