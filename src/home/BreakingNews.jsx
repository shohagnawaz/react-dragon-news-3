import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
        <button className="btn btn-secondary">Beaking News</button>
        <Marquee pauseOnHover={true}>
          <Link to="/">
            I can be a React component, multiple React components, or just some
            text. I can be a React component, multiple React components, or just
            some text.
          </Link>
        </Marquee>
    </div>
  );
};

export default BreakingNews;
