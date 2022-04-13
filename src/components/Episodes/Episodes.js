import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisode } from '../../redux/Episode/EpisodeRedux';
import EpisodeInfo from './EpisodeInfo';
import SelectEpisode from './SelectEpisode';

const Episodes = () => {
  const [episode] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getEpisode(episode, dispatch);
  }, [episode]);

  const episodeName = useSelector((state) => state.episodeReducer);

  return (
    <div className="episode-container">
      {
        episodeName.map(({
          id, name, airDate, characters, episode,
        }) => (
          <EpisodeInfo
            key={id}
            name={name}
            air_date={airDate}
            characters={characters}
            episode={episode}
          />
        ))
      }
      <SelectEpisode />
    </div>
  );
};

export default Episodes;
