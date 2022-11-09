import axios from 'axios'
import { useEffect, useState } from 'react'
import BlockQuote from './components/BlockQuote'
import Button from './components/Button'

export default function App() {
  const [quote, setQuote] = useState([])
  const [loading, setLoading] = useState(true)

  async function getQuotes() {
    setLoading(true)
    try {
      const { data } = await axios('https://animechan.vercel.app/api/random')
      setQuote(data)
      setLoading(false)
    } catch (error) {
      console.log('Something went wrong.')
      setLoading(false)
    }
  }

  useEffect(() => {
    getQuotes()
  }, [])

  const handleClick = () => {
    getQuotes()
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-200'>
      {loading ? (
        <div>Loading ....</div>
      ) : (
        <>
          <BlockQuote>
            <BlockQuote.Title>{quote.anime}</BlockQuote.Title>
            <BlockQuote.Quote>{quote.quote}</BlockQuote.Quote>
            <BlockQuote.Author>{quote.character}</BlockQuote.Author>
          </BlockQuote>
          <Button onClick={handleClick} />
        </>
      )}
    </div>
  )
}
