import GlobalStyle from './common-styles/GlobalStyle';
import { AppWrapper } from './App.styled';
import {
  Footer,
  Header,
  Hero,
  Recommendation,
  Subscribe,
} from './components';
import React from 'react';
import { GradientItems } from './common';


export function App() {
  return (
    <AppWrapper>
      <GlobalStyle/>
      <GradientItems/>
      <Header/>
      <Hero/>
      <Recommendation/>
      <Subscribe />
      <Footer/>
      {/* <ReviewCard /> */}
    </AppWrapper>
  );
}
