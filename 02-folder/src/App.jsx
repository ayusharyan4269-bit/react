import Card from "../components/Card"
import Navbar from "../components/Navbar";




function App() {
  const user = 'ayush';
  const age = 18;
  return (
    <div>

<Navbar />

      <div className='card'>
        hey i am {user} and my age is {age}
      </div>

      <Card />
      <Card />
      <Card />

    </div>
  );
}

export default App
