import React from 'react'
import styled from 'styled-components/macro'

export default function Navigation({ buttonTexts, onClick }) {
  return (
    <NavigationStyled className="Navigation">
      {buttonTexts.map((text, index) => (
        <button onClick={() => onClick(index)} key={index}>
          {text}
        </button>
      ))}
    </NavigationStyled>
  )
}

/*
export function setupNavigation({ onClick }) {
  const buttons = getAll('.nav > button')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const { name } = button.dataset
      onClick(name)
      buttons.forEach(btn => btn.classList.toggle('active', btn === button))
    })
  })
}

*/

const NavigationStyled = styled.nav`
  display: flex;
  & > button {
    font-size: 1.5em;
    flex-grow: 1;
  }
`
