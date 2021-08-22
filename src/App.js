import Router from './Router/Router';
import AppProvider from './Context/provider/provider';

function App() {
  return (
    <AppProvider>
      <div className='App'>
        <Router />
      </div>
    </AppProvider>

  );
}

export default App;
