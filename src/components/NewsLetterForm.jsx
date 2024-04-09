import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { firstName, lastName, email });
  };

  return (
    <div className="relative top-14 left-16 w-4/5 rounded-md newsletter-container bg-white pl-20 py-5">
      {/* <div className="newsletter-content">
        <h2>STAY UPDATED</h2>
        <p>Subscribe to the newsletter</p>
        <p>
          Submit your email, and once a month we'll send you our best
          time-saving articles, videos and other resources.
        </p>
      </div> */}
      <form
        className="subscription-form flex flex-wrap pb-5"
        onSubmit={handleSubmit}
      >
        <div className="w-1/3 pb-5 mr-5">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            className="border-gray-400 border-2 my-2 w-full rounded-md pl-2 mx-2"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="w-1/3 pb-5">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            className="border-gray-400 border-2 my-2 w-full rounded-md pl-2"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="w-4/5">
          <label htmlFor="validationCustom01" className="form-label">
            Email Address
          </label>
          <br />
          <input
            className="border-gray-400 border-2 my-2 w-full rounded-md pl-2"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
      </form>
      <button
        className="bg-blue-600 w-4/5 rounded-2xl text-white h-8 "
        type="submit "
      >
        Submit
      </button>
    </div>
  );
};

export default NewsletterForm;
