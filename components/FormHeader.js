const FormHeader = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold">Profile</h2>
        <p className="text-sm">Update your photo and personal details</p>
      </div>
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default FormHeader;
