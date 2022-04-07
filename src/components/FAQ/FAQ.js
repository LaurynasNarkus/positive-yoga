import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import "./FAQ.css";

function FAQ () {

    const questions = [
        {
            question: "What happens after I order?",
            answer: "After you place your order, we get to work!\n" +
                "\n" +
                "Based on the questions you answered in the\n" +
                "quiz, we ll craft your personal plan to your level\n" +
                "with recomendations on how to improve. "
        },
        {
            question: "Where I can access my plan?",
            answer: "Your plan will be accessible in Positive Yoga's\n" +
                "web app with a special link generated after\n" +
                "your purchase."
        },
        {
            question: "How can I cancel my subscription?",
            answer: "You can manage or cancel your subscription\n" +
                "by writing our customer support\n" +
                "hello@positiveyoga.app"
        },
        {
            question: "Why this program is paid?",
            answer: "We are aiming to offer our clients the best\n" +
                "experience, which comes with a lot of work.\n" +
                "The entire yoga program is developed by our\n" +
                "large team of experts that work long hours to\n" +
                "prepare effective, trustworthy and enjoyable\n" +
                "content and workouts that can help you to\n" +
                "reach your goals. The program is also\n" +
                "completely free of ads and is constantly being\n" +
                "updated based on your feedback! "
        }
    ];

    return (
        <div className="faq">
            <div className="faqTitle">Frequently Asked Questions</div>
            <div className="faqQuestions">
                {/*Display all the questions with answers*/}
                {questions.map((question, index) => (
                    <div key={index}>
                        <QuestionAnswer
                            index={index}
                            question={question.question}
                            answer={question.answer}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;