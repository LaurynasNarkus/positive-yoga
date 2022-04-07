import React from 'react';
import CountdownTimer from './components/CountDownTimer/CountdownTimer';
import Header from './components/Header/Header';
import IntroText from './components/IntroText/IntroText';
import Program from './components/Program/Program';
import SuccessStories from './components/SuccessStories/SuccessStories';
import ButtonMyPlan from "./components/ButtonMyPlan/ButtonMyPlan";
import FAQ from './components/FAQ/FAQ';
import Yoga from './components/Yoga/Yoga';
import StartYogaText from './components/StartYogaText/StartYogaText';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const DISCOUNT_TIME_IN_MS = 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeDiscount = NOW_IN_MS + DISCOUNT_TIME_IN_MS;

  return (
    <div className="appWrapper">
      <CountdownTimer targetDate={dateTimeDiscount} />
      <Header />
      <IntroText />
      <Program />
      <SuccessStories />
      <ButtonMyPlan />
      <Yoga/>
      <FAQ />
      <ButtonMyPlan />
      <StartYogaText />
      <Program />
      <Footer />
    </div>

  );
}
