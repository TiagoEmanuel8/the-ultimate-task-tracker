import { useState } from 'react';
import './App.css'

function App() {
  const [title, setTitle] = useState("");

  function handleCheateDeck(e: React.FormEvent) {
    e.preventDefault();
     fetch("http://localhost:3001/decks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' }
     })
  }

  return (
    <div className="App">
      <form onSubmit={handleCheateDeck} >
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value)
          }}
          />
        <button>Create Deck</button>
      </form>
    </div>
  )
}

export default App
