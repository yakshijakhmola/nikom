import React, { useState, useEffect } from "react";

const Try1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [storedata, setStoredata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const saveData = localStorage.getItem("formData");
    if (saveData) {
      setStoredata(JSON.parse(saveData));
    }
  }, []);

  const SubmitForm = e => {
    e.preventDefault();
    try {
      const formData = { name, email, phone };
      localStorage.setItem("formData", JSON.stringify(formData));
      setStoredata(formData); 
      console.log(formData);
    } catch (error) {
      console.log("Something is wrong!");
    }
  };

  return (
    <div className="grid grid-cols-2 grid-rows-1 py-10 px-10">
      <div>
        <form>
          <input
            type="text"
            placeholder="Name*"
            className="border-1 border-solid border-black w-full py-2 px-4 my-2"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="border-1 border-solid border-black w-full py-2 px-4 my-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone Number*"
            className="border-1 border-solid border-black w-full py-2 px-4 my-2"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-900 text-center text-white py-2 px-4 rounded-xl"
            onClick={SubmitForm}
          >
            Submit Enquiry
          </button>
        </form>
      </div>
      <div>
        <p>
          <b>Name:</b> {storedata.name}
        </p>
        <p>
          <b>Email:</b> {storedata.email}
        </p>
        <p>
          <b>Contact:</b> {storedata.phone}
        </p>
      </div>
    </div>
  );
};

export default Try1;