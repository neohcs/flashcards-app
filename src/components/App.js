import React, { useState } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import BookmarksPage from './BookmarksPage'
import PracticePage from './PracticePage'
import SettingsPage from './SettingsPage'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components/macro'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!'
    }
  ])

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: (
        <section>
          Practice cards={cards.filter(card => card.doPractice)}
        </section>
      ),
      2: (
        <section>
          Bookmarks cards={cards.filter(card => card.isBookmarked)}
        </section>
      ),
      3: (
        <SettingsPage
          cards={cards}
          setCards={setCards}
          afterCreateCard={setActiveIndex}
        />
      )
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <AppStyled className="App">
      <GlobalStyle />
      {renderPage()}
      <Navigation
        buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
        onClick={setActiveIndex}
      />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`

export default App
