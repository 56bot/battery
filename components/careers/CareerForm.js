import { useState, useRef, useEffect } from "react";

const SubmitButton = ({ submitted }) => {
  return (
    <div className="submit-btn c12 tac">
      <input
        className="bgc-black c-white fsE"
        type="submit"
        value={submitted ? "Submitted" : "Submit"}
      />

      <style jsx>{`
        input {
          padding: 10px 30px;
          border-radius: 20px;
          font-weight: bold;
          display: inline-block;
          transition: 0.3s ease-out opacity, 0.2s ease-out transform;
        }

        input:focus {
          outline: none;
        }
        input:active {
          outline: none;
          transform: scale(0.98);
        }

        input:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

const Input = ({ label, name, type, changeFunction, value, submitted }) => {
  const ref = useRef();

  useEffect(() => {
    if (submitted && ref && ref.current) {
      ref.current.blur();
    }
  }, [submitted]);

  const handleChange = (e) => {
    changeFunction(e.target.value);
  };

  return (
    <div className={`input-row`}>
      <label className="fsE">{label}</label>
      <input
        className="fsD"
        onChange={handleChange}
        ref={ref}
        value={value}
        type={type}
        name={name}
      />

      <style jsx>{`
        label {
          display: block;
          margin-bottom: calc(var(--gutter) / 3);
        }

        .input-row {
          width: calc(50% - 0.75rem);
          margin-bottom: var(--gutter);
        }
        input {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.4);
          border-radius: 5px;
          padding: 5px 13px;
          transition: 0.3s ease-out border-color;
        }

        input:focus,
        input:active {
          outline: none;
          border: 1px solid rgba(0, 0, 0, 1);
        }

        @media (max-width: 750px) {
          .input-row {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const TextArea = ({ label, name, type, changeFunction, value, submitted }) => {
  const ref = useRef();

  const handleChange = (e) => {
    changeFunction(e.target.value);
  };

  return (
    <div className={`input-row`}>
      <label className="fsE">{label}</label>
      <textarea
        className="fsD"
        rows={8}
        onChange={handleChange}
        ref={ref}
        value={value}
        type={type}
        name={name}
      />
      <style jsx>{`
        label {
          display: block;
          margin-bottom: calc(var(--gutter) / 3);
        }

        .input-row {
          width: 100%;
          margin-bottom: var(--gutter);
        }
        textarea {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.4);
          border-radius: 5px;
          padding: 5px 13px;
          transition: 0.3s ease-out border-color;
        }

        textarea:focus,
        textarea:active {
          outline: none;
          border: 1px solid rgba(0, 0, 0, 1);
        }
      `}</style>
    </div>
  );
};

const CareerForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aboutYou, setABoutYou] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      clearForm();
    }, 3000);
  };

  const clearForm = () => {
    setFullName("");
    setEmailAddress("");
    setPhoneNumber("");
    setABoutYou("");
  };

  return (
    <section className="career-form mw-large mxa psr">
      <form onSubmit={handleSubmit} className="mw-small mxa ">
        <h2 className="main">Apply for this role</h2>

        <div className="form-elements x xw xjb">
          <Input
            label="Full Name"
            type="text"
            name="Name"
            changeFunction={setFullName}
            value={fullName}
            submitted={submitted}
          />
          <Input
            label="Email Address"
            type="email"
            name="email"
            changeFunction={setEmailAddress}
            value={emailAddress}
            submitted={submitted}
          />
          <Input
            label="Website or Instagram"
            type="text"
            name="website"
            changeFunction={setWebsite}
            value={website}
            submitted={submitted}
          />
          <Input
            label="Phone Number"
            type="text"
            name="phonenumber"
            changeFunction={setPhoneNumber}
            value={phoneNumber}
            submitted={submitted}
          />

          <TextArea
            label="Tell us a bit about yourself"
            type="text"
            name="about-u"
            changeFunction={setABoutYou}
            value={aboutYou}
            submitted={submitted}
          />

          <SubmitButton submitted={submitted} />
        </div>

        <div className={`submitted-view x xac submitted-${submitted}`}>
          <div className="c12 mw-small mxa">
            <h2 className="margin-bottom">Thank you for submitting.</h2>
            <p>We usually respond to applications within 3 business days</p>
          </div>
        </div>
      </form>
      <style jsx>{`
        .submitted-view {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: white;
          opacity: 0;
          pointer-events: none;
          transition: 0.3s ease-out opacity;
        }
        .submitted-view .mw-small {
          padding: var(--gutter-medium);
        }

        .submitted-view.submitted-true {
          opacity: 1;
        }
        .career-form {
          border-top: 1px solid rgba(0, 0, 0, 0.3);
        }
        form {
          padding: calc(var(--gutter-medium) * 3) var(--gutter-medium);
        }

        h2.main {
          margin-bottom: calc(var(--gutter-medium) * 2);
        }
      `}</style>
    </section>
  );
};

export default CareerForm;
