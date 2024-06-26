// This Component will just add section tag on top of whatever props children you are passing into
const Colorizer: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <section className="red-box">
      {children}
    </section>
  );
}

export default Colorizer