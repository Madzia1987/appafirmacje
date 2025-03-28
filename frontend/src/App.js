import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <header className="w-full py-6 text-center bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 text-white text-3xl font-bold">
        💎 Testy Osobowości & Afirmacje
      </header>
      
      <main className="flex flex-col items-center p-6">
        <h1 className="text-4xl text-gray-700 font-semibold">Sprawdź swój potencjał ✨</h1>
        
        <button className="mt-6 px-8 py-3 bg-orange-400 text-white text-lg font-bold rounded-lg shadow-md transition duration-300 hover:bg-orange-500">
          Rozpocznij Test
        </button>
        
        <section className="mt-10 w-full max-w-4xl grid grid-cols-2 gap-6">
          <div className="p-6 bg-pink-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">💖 Kobieca energia</h2>
            <p className="text-gray-700">Odkryj swoją moc i pasję.</p>
          </div>
          
          <div className="p-6 bg-indigo-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">🧠 Męska logika</h2>
            <p className="text-gray-700">Zrozum swoje mechanizmy decyzyjne.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

