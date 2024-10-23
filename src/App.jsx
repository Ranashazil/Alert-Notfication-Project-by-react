import React from 'react';
import Alert from './components/Alert';
import HeyAlert from './components/heyAlert';
import './App.css';

function App() {
  return (
  <div className='w-full  border-spacing-2 text-white p-6'>
      {Alert.map((hey) => (
        <HeyAlert
          key={hey.id}
          type={hey.type}
          title={hey.title}
          id={hey.id}
          message={hey.message}
        />
      ))}
    </div>
  );
}

export default App;
