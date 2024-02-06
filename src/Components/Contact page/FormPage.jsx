

const FormPage = (props) => {

  
  
  const handleForm = (e) => {
    e.preventDefault();
    const userObj = {
      name: e.target.name.value,
      email: e.target.email.value,
      messagee: e.target.message.value
    };
   
    props.userData(userObj);
  };
  

  return (
    <form onSubmit={handleForm} className="px-5 grid gap-5">
      <div className="relative">
        <label
          className="absolute -top-3 left-4 bg-white px-1 font-semibold"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="pl-3 pl-3 border border-2 border-gray-400 w-full py-1 flex "
        />
      </div>
      <div className="relative">
        <label
          className="absolute -top-3 left-4  bg-white px-1 font-semibold"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="pl-3 border border-2 border-gray-400 w-full py-1 flex "
        />
      </div>

      <div className="relative">
        <label
          className="absolute -top-3 left-4  bg-white px-1 font-semibold"
          htmlFor="message"
        >
          Text
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="resize-none pl-3 border border-2 border-gray-400 w-full py-1 flex "
        />
      </div>

      <div className="flex justify-end ">
        <button className="bg-black  text-white px-16 py-1 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormPage;
