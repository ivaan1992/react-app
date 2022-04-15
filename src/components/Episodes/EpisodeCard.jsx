import { React } from 'react';
import { useSelector } from 'react-redux';

const EpisodeCard = () => {
    
    const {} = useSelector((state) => state.selectedEpisode)
    
    return (
        <div className="episode-card">
            <h3 className="title"></h3>
            <p className="airdate"></p>
            <div className="character-container">

            </div>
        </div>
    )
}

export default EpisodeCard; 
