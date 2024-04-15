const Header = ({ view }) => {
  return (
    <header>
      {/* <img src={`../images/bg-header-${view}.svg`} alt="bg-header" /> */}
      {/* add this line only for deployment */}
      <img src={`./images/bg-header-${view}.svg`} alt="bg-header" />
    </header>
  );
};

export default Header;
