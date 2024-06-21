// rafce
const HomePage = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis">
        Big React App
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorum deserunt natus similique, mollitia impedit eos eum corrupti commodi laborum, labore magnam amet, numquam dicta voluptatibus laudantium tenetur fuga maiores.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
            Browse Netflix
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Manage Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
