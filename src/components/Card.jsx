import NewTag from "./NewTag";
import FeaturedTag from "./FeaturedTag";
const Card = ({
  id,
  company,
  contract,
  featured,
  languages,
  level,
  location,
  logo,
  position,
  postedAt,
  role,
  tools,
}) => {
  return (
    <main className="highlight">
      <article>
        <img src={logo} alt="logo" />
      </article>

      <section className="company">
        <h3>{company}</h3>
        {/* new is a property of obj but it is also a keyword in JS so using sq brackets to let JS know I'm accessing the property new and not keyword new */}
        {["new"] && <NewTag />}
        {featured && <FeaturedTag />}
      </section>

      <h3>{position}</h3>

      <ul>
        <li>{postedAt}</li>
        <li>{contract}</li>
        <li>{location}</li>
      </ul>

      <div className="line"></div>

      <section>{/* loop tags */}</section>
    </main>
  );
};

export default Card;
