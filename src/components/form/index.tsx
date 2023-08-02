import '@/styles/styles.scss';
const Form = () => {
  return (
    <div className="email-form">
      <h2>
        Start by <span>saying hi</span>
      </h2>
      <input type="text" name="name" id="" placeholder="Your name" />
      <input type="email" name="email" id="" placeholder="Email Address" />
      <div>
        <input
          type="number"
          name="phone-number"
          id=""
          placeholder="Phone number"
        />
        <button type="submit">Send</button>
      </div>
    </div>
  );
};

export default Form;
