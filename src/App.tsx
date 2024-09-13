import { useState } from 'react';
import { Menubar } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menubar></Menubar>
    </>
  );
}

export default App;
