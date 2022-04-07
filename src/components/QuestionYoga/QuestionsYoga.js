import GreenCheckIcon from "../../assets/images/GreenCheckIcon.svg";
import "./QuestionsYoga.css"

function QuestionsYoga() {

    const questions = [
        "Each program adapts to your age or fitness level",
        "Mindful way to exercise and get real results",
        "Effective and long term lasting results",
        "Suited activities that benefit both the mind and body",
        "Low-intensity but highly effective workouts",
        "Extra attention to muscle, joint and back health",
    ]

    return (
        <div className="questionsYoga">
            <div className="questionsYogaTitle">Is positive Yoga right for me?</div>
            <div className="questionsYogaList">
                {/*Display all the questions*/}
                {questions.map((question, index) => {
                    return (
                        <div className="questionYoga" key={index}>
                            <div className="questionYogaIcon">
                                <img src={GreenCheckIcon} className="greenCheckIcon" alt="check icon" />
                            </div>
                            <p>{question}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default QuestionsYoga;
