const BlockQuote = ({ children }) => {
  return <div className='w-[50%] relative'>{children}</div>
}

const AnimeTitle = ({ children }) => {
  return (
    <Description className='bg-purple-600 -top-5 -left-12 w-80'>
      {children}
    </Description>
  )
}

const Quote = ({ children }) => {
  return (
    <div className=' bg-slate-900 shadow-lg rounded-3xl flex justify-center items-center p-10 text-white font-medium tracking-wider text-lg'>
      <p>{children}</p>
    </div>
  )
}

const AnimeAuthor = ({ children }) => {
  return (
    <Description className='bg-pink-600 -bottom-5 -right-12 w-60'>
      {children}
    </Description>
  )
}

const Description = (props) => {
  const { className, children } = props
  return (
    <h1
      className={`${className} absolute font-bold px-5 py-2 text-white rounded-full text-ellipsis text-center`}
    >
      {children}
    </h1>
  )
}

BlockQuote.Title = AnimeTitle
BlockQuote.Quote = Quote
BlockQuote.Author = AnimeAuthor

export default BlockQuote
