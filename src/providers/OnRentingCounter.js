import { useState, createContext  } from 'react';

const counterContext = createContext();

function OnRentingCounter(props) {
  const [counter, setCounter] = useState(0);
  const countItem = function() {
    setCounter(counter + 1);
  }
  const data = {counter, countItem};

  return (
    <counterContext.Provider value={data}>

    </counterContext.Provider>
  )
}

export default OnRentingCounter;