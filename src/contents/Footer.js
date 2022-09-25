import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="left"></div>
        <div className="right">
          <div className="links">
            <div className="logo">
              Baby
              <i class="fas fa-regular fa-baby-carriage"></i>
            </div>
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Blogs</li>
              <li>Brand</li>
              <li>Company</li>
            </ul>
          </div>
          <div className="create">
            <h2>Create a new Blog.</h2>
            <form onSubmit="">
              <label> Blog title:</label>
              <input type="text" required />
              <label> Blog Details:</label>
              <textarea required></textarea>
              <label>Blog author:</label>
              <select value="">
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
              </select>
              <button>Add Blog</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copy-right">All-rights reserved-2022</div>
    </>
  );
};
export default Footer;
