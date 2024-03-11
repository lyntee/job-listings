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
      <article className="logo">
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

      <section className="tags-container">
        {[role, level, ...languages, ...tools].map((tag) => (
          <span key={id + "-tag"} className="tags">
            {tag}
          </span>
        ))}
      </section>
    </main>
  );
};

export default Card;
