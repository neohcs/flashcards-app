import React from 'react'
import Card from './Card'
import styled from 'styled-components'

export default function HomePage({ cards }) {
  return (
    <BookmarksPageStyled className="page">
      <h1>Bookmarks</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </BookmarksPageStyled>
  )
}
const BookmarksPageStyled = styled.section`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`
