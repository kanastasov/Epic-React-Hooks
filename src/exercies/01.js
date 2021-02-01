import * as React from 'react'

function Greeting({initialName = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  let [name, setName] = React.useState(initialName);


  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.value);
    // 🐨 update the name here based on event.target.value
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value = {name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="geroge"/>
}

export default App
