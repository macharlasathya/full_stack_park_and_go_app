// import { Routes, Route } from 'react-router-dom';
// import LandingPage from './Component/LandingJsx/LandingPage';
// import SignupForm from './Component/LandingJsx/SignupForm';

// function App() {
//   return (
//     <>
//     < LandingPage/>
//     <Routes>
//       <Route path="/signup" element={<SignupForm />} />
//     </Routes>
//     </>
//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import LandingPage from './Component/LandingJsx/LandingPage';
import SignupForm from './Component/LandingJsx/SignupForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
}

export default App;

