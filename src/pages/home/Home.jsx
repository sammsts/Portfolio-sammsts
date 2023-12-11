import './style.css';

const Home = ({ isDarkMode }) => {
    const pageStyle = {
        backgroundColor: isDarkMode ? '#1C1C1C' : '#E6E6FA',
        color: isDarkMode ? '#FFFFFF' : '#000000',
        transition: 'background-color 0.3s ease',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };
  
    return (
      <div style={pageStyle}>
        <span>Home</span>
      </div>
    );
  };
export default Home;