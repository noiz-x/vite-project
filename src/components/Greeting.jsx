const greet = "Hello, World!"
const message = "Welcome to my website"

const date = new Date()

const Greeting = () => {
  return (
    <div>
        <h1>{greet}</h1>
        <p>{message}</p>
    </div>
  )
}

export default Greeting