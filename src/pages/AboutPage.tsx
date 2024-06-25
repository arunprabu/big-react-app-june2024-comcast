const AboutPage = () => {
  const myStyles = { color: "black", backgroundColor: "lime" };

  return (
    <div>
      <h1>About Us</h1>

      <p style={{ color: "red", backgroundColor: "yellow" }}>
        Demo of Inline Styles #1
      </p>

      <p style={{ color: "red", backgroundColor: "yellow" }}>
        Demo of Inline Styles #2
      </p>
      {/* NOTE: NEVER EVER WRITE INLINE STYLES IN LISTS & KEYS */}
      {/* The issue is -- you will end up having code duplicates -- Solution is to go for internal styles */}

      <p style={myStyles}>Demo of Internal Styles</p>
      <p style={myStyles}>You can reuse this....</p>
    </div>
  );
};

export default AboutPage;
