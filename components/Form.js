const Form = () => {
  return (
    <div className="text-black">
      <div id="general">
        <div>
          <label htmlFor="fName">Name</label>
          <input className="text-field" id="fName" type="text" />
          <input className="text-field" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className="text-field" id="email" type="email" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea className="text-field" id="bio" rows={4} />
        </div>
        <div>
          <label htmlFor="phone">Ph No.</label>
          <input className="text-field" id="phone" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Form;
