import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components'

export default function SettingsPage({ cards, setCards, afterCreateCard }) {
  const [newTitle, setNewTitle] = useState('')
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')

  return (
    <SettingsPageStyled className="page">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTitle}
          onChange={event => setNewTitle(event.target.value)}
          placeholder="Insert a title here"
        />
        <textarea
          value={newQuestion}
          onChange={event => setNewQuestion(event.target.value)}
          placeholder="Insert a question here"
        />
        <textarea
          value={newAnswer}
          onChange={event => setNewAnswer(event.target.value)}
          placeholder="Insert the answer here"
        />
        <button>Create new card</button>
      </form>
    </SettingsPageStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const newCard = {
      title: newTitle,
      question: newQuestion,
      answer: newAnswer
    }
    setCards([...cards, newCard])
    console.log(newCard)
    console.log(cards)
    console.log(setCards)
    afterCreateCard(0)
  }
}

const SettingsPageStyled = styled.section`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 10px 10px #0002;
  }

  & > form > input {
    height: 50px;
    padding: 10px;
    border: 1px solid grey;
  }

  & > form > textarea {
    height: 100px;
    padding: 10px;
    border: 1px solid grey;
  }

  & > form > button {
    height: 50px;
    font-size: 1.2em;
    flex-grow: 1;
    border: 1px solid grey;
  }
`
