import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocations } from '../../redux/Location/LocationRedux';

const SelectLocation = () => {
  const [locationPage, setLocationPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getLocations(locationPage, dispatch);
  }, [locationPage]);

  return (
    <div className="select-location">
      {
              locationPage
                ? <button className="prev" type="button" onClick={() => setLocationPage(locationPage - 1)}>Previous</button>
                : ''
}
      <button className="next" type="button" onClick={() => setLocationPage(locationPage + 1)}>Next</button>
    </div>
  );
};

export default SelectLocation;
