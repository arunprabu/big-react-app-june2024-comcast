import Colorizer from "../components/shared/Colorizer"

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Colorizer>
        <h2>Testing #1</h2>
        <p>Expecting this to have wrapper section tag</p>
      </Colorizer>

      <Colorizer>
        <h2>Testing #2</h2>
        <p>Expecting this to have wrapper section tag</p>
      </Colorizer>

      <Colorizer>
        <h2>Testing #3</h2>
        <p>Expecting this to have wrapper section tag</p>
      </Colorizer>
    </div>
  );
}

export default ContactPage