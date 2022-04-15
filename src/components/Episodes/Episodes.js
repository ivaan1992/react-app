import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes, getEpisode } from '../../redux/Episode/EpisodeRedux';
import EpisodeInfo from './EpisodeInfo';
import SelectEpisode from './SelectEpisode';
import CharacterCatalogue from '../Characters/CharacterCatalogue';

const Episodes = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.episodeReducer.total);
  const selectedEpisode = useSelector((state) => state.episodeReducer.selectedEpisode);
  const chars = useSelector((state) => state.episodeReducer.characters);
  console.log({
    total,
    chars,
  });
  useEffect(() => {
    getEpisodes({ page: '1', dispatch });
  }, []);

  const setSelectedEpisode = (episode) => {
    getEpisode({ episodeParam: episode, dispatch });
  };

  return (
    <div className="episode-container">
      <SelectEpisode
        onChange={setSelectedEpisode}
      >
        {
        [...Array(total).keys()].map((id) => (
          <EpisodeInfo
            key={id + 1}
            id={id + 1}
          />
        ))
      }
      </SelectEpisode>
      <h1>{selectedEpisode.name}</h1>
      <h1>{selectedEpisode.air_date}</h1>
      <h1>{selectedEpisode.episode}</h1>
      <div className="characters-container">
        {chars.map(({
          image, id, location, name, status,
        }) => (
          <CharacterCatalogue
            img={image}
            key={id}
            location={location}
            name={name}
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
