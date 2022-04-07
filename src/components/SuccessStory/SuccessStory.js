import "./SuccessStory.css";

function SuccessStory({surname, age, location, rate, img, text}) {

    return (
        <div id="successStory" className="successStory">
            <div className="clientDescriptionWrapper">
                <p className="clientDescription">{surname}, {age}</p>
            </div>
            <div className="successStoryLocationWrapper">
                <p className="successStoryLocation">{location}</p>
            </div>
            <div className="successStoryRate">
                <img src={rate} alt="stars" />
            </div>
            <div className="successStoryImgWrapper">
                <img src={img} alt="successStoryImg" />
            </div>
            <div className="successStoryText">
                <p className="successStoryText">{text}</p>
            </div>
        </div>
    )
}

export default SuccessStory;