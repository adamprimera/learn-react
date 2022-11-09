const Button = (props) => {
  return (
    <button
      {...props}
      className='bg-pink-600 hover:bg-indigo-600 transition-all ease-linear duration-200 px-5 py-2 rounded-full font-bold text-white mt-10 w-40'
    >
      Refresh
    </button>
  )
}

export default Button
