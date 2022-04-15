import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes, getEpisode } from '../../redux/Episode/EpisodeRedux';
import EpisodeInfo from './EpisodeInfo';
import SelectEpisode from './SelectEpisode';
import CharacterCatalogue from '../Characters/CharacterCatalogue';
import './Episodes.css';

const Episodes = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.episodeReducer.total);
  const selectedEpisode = useSelector((state) => state.episodeReducer.selectedEpisode);
  const chars = useSelector((state) => state.episodeReducer.characters);

  useEffect(() => {
    getEpisodes({ page: '1', dispatch });
  }, []);

  const setSelectedEpisode = (episode) => {
    getEpisode({ episodeParam: episode, dispatch });
  };

  return (
    <div className="d-flex episode-container">
      <div className="episode-selector">
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
      </div>
      <div className="episode-card-title-content">
        <div className="d-flex episode-info">
          <h1 className="episode-info-title">{selectedEpisode.name}</h1>
          <h5 className="episode-info-date">{selectedEpisode.air_date}</h5>
          <h5 className="episode-info-number">{selectedEpisode.episode}</h5>
        </div>
        <div className="">
          <div className="chars">
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
      </div>
    </div>
  );
};

export default Episodes;
