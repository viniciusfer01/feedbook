import "./Card.css";

const Card = (props) => {
  return <div className="content">{props.children}</div>;
};

export default Card;
