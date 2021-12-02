import '@app/App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from '@navigation/RouterConfig';
import { Provider } from 'react-redux';
import store from '@app/redux/store';

const App = function () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
