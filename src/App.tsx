import React from 'react';
import './App.css';
import { styled } from 'styled-components';
import Header from './modules/Header';
import Body from './modules/Body';
import Footer from './modules/Footer';
import NotificationContextProvider from './provider/notification';
import CartContextProvider from './provider/cart';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <NotificationContextProvider>
        <CartContextProvider>
          <Background>
            <Header />
            <Body />
            <Footer />
          </Background >
        </CartContextProvider>
      </NotificationContextProvider>
    </HelmetProvider>
  );
}

const Background = styled.div`
  background-color: #ebf4f8;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  `




export default App;
