import IphoneYogaJourneyImage from '../../assets/images/IphoneYogaJourney.png';
import "./YogaJourney.css";

function YogaJourney() {
    return(
        <div className="yogaJourney">
            <div className="yogaJourneyTitle">Start your yoga journey now!</div>
            <div className="yogaJourneyImageWrapper">
                <img className="yogaJourneyImage" src={IphoneYogaJourneyImage} alt="Yoga Journey"/>
            </div>
        </div>
    )
}

export default YogaJourney;