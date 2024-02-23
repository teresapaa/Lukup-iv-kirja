import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const BookForm = () => {
  return 'Hello world, I am at BookForm'
}

const Home = () => {
  return 'Hello world, I am at Home'
}

const Stats = () => {
  return 'Hello world, I am at Stats'
}

const BookList = () => {
  return 'Hello world, I am at BookList'
}

function App() {
  const padding = {
    padding: 5,
  }

  return (
    <div>
      <div>
        <Link style={padding} to="/">
          Home
        </Link>
        <Link style={padding} to="/form">
          Add new
        </Link>
        <Link style={padding} to="/booklist">
          Book list
        </Link>
        <Link style={padding} to="/stats">
          Stats
        </Link>
      </div>
      <Routes>
        <Route path="/form" element={<BookForm />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
