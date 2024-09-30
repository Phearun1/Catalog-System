// src/Router.js
import UserProfile from './pages/UserProfile';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
