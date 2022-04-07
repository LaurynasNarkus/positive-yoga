import QuestionsYoga from "../QuestionYoga/QuestionsYoga";
import YogaJourney from "../YogaJourney/YogaJourney";
import "./Yoga.css";

function Yoga() {
    return (
        <div className="yogaWrapper">
            <div className="yoga">
                <QuestionsYoga />
                <YogaJourney />
            </div>

        </div>
    )
}

export default Yoga;