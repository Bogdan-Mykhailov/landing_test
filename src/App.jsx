import GlobalStyle from './common-styles/GlobalStyle';
import { Hero } from './components/Hero';
import { Container } from './common-styles';
import { AppWrapper } from './App.styled';
import { Header } from './components';
import React from 'react';

export function App() {
  return (
    <AppWrapper>
      <GlobalStyle/>
      <Header />
      <Hero/>
    </AppWrapper>
  );
}
