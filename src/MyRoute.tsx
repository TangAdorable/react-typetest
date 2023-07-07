import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerLeft from './components/DrawerLeft';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App';
import PMESIILabel from './components/PMESIILabel';


export default function MyRoute() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <DrawerLeft />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pmesii-label/:pmesiiLabel" element={<PMESIILabel />} />
          <Route path="/home" element={<Navigate to="/" />} />
          {/* <Route path="/pmesii" element={<PMESIILabel />} /> */}
          {/* <Route path="/blog/:id" element={<Details/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};