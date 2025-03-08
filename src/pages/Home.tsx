export default function Home() {
  const gardenStyle = {
    backgroundImage: 'url("/garden.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '932px', // Ensures the background covers the full height of the page
    width: '430px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    overflow: 'hidden',
    flexDirection: 'column', // Align elements vertically
  }

  const buttonStyle = {
    backgroundColor: '#f5c1d2', // Light pink button
    color: 'white', // White text on the button
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '8px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  }


  const handleClick = () => {
    // Redirect to the /garden page
    window.location.href = '/events';
  };


  return (
    <div style={gardenStyle}>
      <button style={buttonStyle} onClick={handleClick}>
        Meetup Now
      </button>
    </div>
  );
}
