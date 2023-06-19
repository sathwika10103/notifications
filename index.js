const Notification = (props) => {
  const { image, text } = props;
  return (
    <div>
      <img src={image} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div>
    <h1>Notifications</h1>
    <div>
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
