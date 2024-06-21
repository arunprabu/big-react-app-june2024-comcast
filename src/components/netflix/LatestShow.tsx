interface LatestShowProps {
  title: string;
  thumnailUrl: string;
  category: string;
  publishedOn: string;
  children: string;
}

const LatestShow: React.FC<LatestShowProps> = (props) => {
  // receiving the data from parent componentt
  console.log(props);

  /* props
   * are objects
   * used to receive data from parent component
   * read-only
   */

  return (
    <div className="card">
      <img src={props.thumnailUrl} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <span className="badge text-bg-warning">{props.category}</span>
        <span className="badge text-bg-secondary ms-2">
          {props.publishedOn}
        </span>
        <p className="card-text mt-3">{props.children}</p>
        <a href="#" className="btn btn-primary">
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default LatestShow