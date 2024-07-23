import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import Routes from "./Routes";
import theme from './theme';
import './index.css'
import { ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
      <RouterProvider router={Routes} />
  </ThemeProvider>,
)
