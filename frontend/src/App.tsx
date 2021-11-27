import '@app/App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from '@navigation/RouterConfig';

const App = function () {
  return (
    <div>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
};

export default App;
