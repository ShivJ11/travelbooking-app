import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="text-xl">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button
          class="text-black bg-white hover:bg-green-500 hover:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
          style={{ marginRight: "7px", fontWeight: "700" }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
