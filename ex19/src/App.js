import './App.css';
import AnimalCard from './components/AnimalCard';
import animals from './data/animals';

function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">React PropTypes exercise</p>
        <h1>Meet the animals</h1>
        <p className="intro">
          Each card receives validated props and can reveal additional details.
        </p>
      </header>

      <section className="animal-grid" aria-label="Animal information">
        {animals.map((animal) => (
          <AnimalCard key={animal.name} {...animal} />
        ))}
      </section>
    </main>
  );
}

export default App;
