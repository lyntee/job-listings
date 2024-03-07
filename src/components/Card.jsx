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

      <section>
        <h3>{company}</h3>
        {/* {isNew && <NewTag />}
        {isFeatured && <FeaturedTag />} */}
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
