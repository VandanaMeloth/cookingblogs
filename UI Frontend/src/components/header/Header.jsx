import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Cooking Blog</span>
      </div>
      <img
        className="headerImg"
        src="image/bg1.jpeg"
        alt=""
      />
    </div>
  );
}
