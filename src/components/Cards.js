import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What to Watch</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/STlogo.png'
              text='When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.'
              label='Drama, Fantasy, Horror'
              path='/watchlist'
            />
            <CardItem
              src='images/BBIcon.jpeg'
              text='A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family`s future.'
              label='Crime, Drama, Thriller'
              path='/watchlist'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/MandoIcon.jpg'
              text='The travels of a lone bounty hunter in the outer reaches of the galaxy.'
              label='Action, Adventure, Sci-Fi'
              path='/watchlist'
            />
            <CardItem
              src='images/TheGreatIcon.jpg'
              text='A royal woman living in rural Russia during the 18th century is forced to choose between her own personal happiness and the future of Russia, when she marries an Emperor.'
              label='Biography, Comedy, Drama'
              path='/watchlist'
            />
            <CardItem
              src='images/TheWitcherIcon.jpg'
              text='Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.'
              label=' Action, Adventure, Fantasy'
              path='/watchlist'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
