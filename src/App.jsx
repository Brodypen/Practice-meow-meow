import data from './data/data'
function App() {

  return (
    <>
      <h1>Hello Hi</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{`Hello ${item.name} ${item.owner.name}`}</li>
        ))}
      </ul>
    </>
  )
}

export default App
