import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../redux/Location/LocationRedux';
import LocationInfo from './LocationInfo';

const Location = () => {
  const [location] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getLocations(location, dispatch);
  }, [location]);
  const planet = useSelector((state) => state.locationReducer);

  return (
    <div className="location-container">
      {
        planet.map(({
          name, type, dimension, residents, id,
        }) => (
          <LocationInfo
            key={id}
            name={name}
            type={type}
            dimension={dimension}
            residents={residents}
          />
        ))
      }
    </div>
  );
};

export default Location;
