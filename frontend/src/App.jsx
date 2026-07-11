import { TodoProvider } from './context/TodoContext.jsx';
import { Dashboard } from './pages/Dashboard.jsx';

function App() {
  return (
    <TodoProvider>
      <Dashboard />
    </TodoProvider>
  );
}

export default App;
