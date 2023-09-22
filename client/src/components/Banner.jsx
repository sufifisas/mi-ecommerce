const Banner = ({ title, className }) => {
  return (
    <div className={`Banner ${className}`}>
        <h1>{ title }</h1>
    </div>
  )
}

export default Banner