const Notification = (props) => {
  const { className, paraText, image } = props;
  return (
    <div className={`${className}`}>
      <img src={image} className="icon" />
      <p>{paraText}</p>
    </div>
  );
};

const element = () => {
  <div className="background">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="para1"
      paraText="Informational message"
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="para2"
      paraText="Success message"
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="para3"
      paraText="Warning Message"
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="para4"
      paraText="Error Message"
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>;
};
ReactDOM.render(element, document.getElementById("root"));
