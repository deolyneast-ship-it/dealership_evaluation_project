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
