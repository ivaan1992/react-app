import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEpisode } from '../../redux/Episode/EpisodeRedux';

const SelectEpisode = () => {
  const [episodePage, setEpisodePage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getEpisode(episodePage, dispatch);
  }, [episodePage]);

  return (
    <div>
      {
         episodePage
           ? <button className="prev" type="button" onClick={() => setEpisodePage(episodePage - 1)}>Previous</button>
           : ''
     }
      <button className="next" type="button" onClick={() => setEpisodePage(episodePage + 1)}>Next</button>

    </div>
  );
};

export default SelectEpisode;
