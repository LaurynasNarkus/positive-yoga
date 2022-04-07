import {useState} from "react";
import ProgramElement from "../ProgramElement/ProgramElement";
import Plan from '../Plan/Plan';
import './Program.css';
import ImgSafeCheckout from '../../assets/images/SafeCheckout.png';
//SVGs from icons folder
import bookCheck from '../../assets/icons/bookcheck.svg';
import exercise from '../../assets/icons/exercise.svg';
import plan from '../../assets/icons/plan.svg';
import shoe from '../../assets/icons/shoe.svg';
import diet from '../../assets/icons/diet.svg';
import smartwatch from '../../assets/icons/smartwatch.svg';
import whistle from '../../assets/icons/whistle.svg';

function Program() {

    const plans = [
        {
            title:"6 month plan",
            price:"9.99",
            sold:"50",
            periodicity:"every 6 months"
        },
        {
            title:"3 month plan",
            price:"14.99",
            description:"Get access to your yoga program now!",
            periodicity:"every 3 months"
        },
        {
            title:"1 month plan",
            price:"19.99",
            description:"Get access to your yoga program now!",
            periodicity:"monthly"
        }
    ]
    const programElements = [
       {
           title: "A personalized yoga program",
           description: "Completely safe and focused on your key goals",
           icon: plan,
       },
       {
           title: "Easy & enjoyable yoga workouts for your level",
           description: "Program adjusts to your level and pace",
           icon: exercise,
       },
       {
           title: "No special preparation needed",
           description: "Perfect for beginners: Requires no special preparation or equipment",
           icon: shoe,
       },
       {
           title: "Daily motivation & accountability",
           description: "Track your progress, develop a healthy routine, reach goals faster",
           icon: diet,
       },
       {
           title: "Browse from various yoga challenges",
           description: "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
           icon: whistle,
       },
       {
           title: "Easy access on any device",
           description: "Do your yoga anywhere across all types of devices",
           icon: smartwatch,
       },
       {
           title: "A complete guide to get start",
           description: "Best tips, guidelines, advice, and recommendations for successful practice",
           icon: bookCheck,
       }
   ]

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChangeIndex = (index) => {
        setSelectedIndex(index);
    }

  return (
      <div className="programWrapper">
        <div className="program">
            <div className="programDescription">
                <div className="choosePlanWrapper">
                    <div className="boldHeader">Choose your plan and get <span className="orange">7 days free trial</span></div>
                </div>
                {/*Display all the plans*/}
                {plans.map((plan, index) => (
                    <Plan key={index} {...plan} selected={index === selectedIndex} changeIndex={() => handleChangeIndex(index)}/>
                ))}
                <div className="buttonGetPlanWrapper">
                    <button className="buttonGetPlan">Get your plan</button>
                </div>
                <div className="conditionsWrapper">
                    <div className="conditions">
                        <p className="duration">After 7 days free trial subscription payment is automatically
                            charged from your account unless it is canceled at least 24
                            hours before the end of the trial period.</p>
                        <p>By choosing a payment method you agree to the <a href="/#">T&Cs</a> and <a href="/#">Privacy Policy</a></p>
                        <div className="imageSafeCheckoutWrapper">
                            <img src={ImgSafeCheckout} alt="SafeCheckout" width={"100%"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="programContentWrapper">
                <div className="programQuestionWrapper">
                    <div className="programQuestion">What's in my program?</div>
                </div>
                <div className="programContent">
                    <div className="programElementList">
                        {/*Display all the progams*/}
                        {programElements.map((item, index) => {
                            return (
                                <div className="programElement" key={index}>
                                    <ProgramElement
                                        title={item.title}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Program;
