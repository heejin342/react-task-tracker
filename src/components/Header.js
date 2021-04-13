import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

//상위 컴포넌트가 props 를 안줬을때, 자식 컴포넌트에서 이런식으로 적용할 수 있다.
Header.defaultProps = {
  title: "TaskTrackers",
};

//타입스크립트에선 이거 잡아줌
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//스타일 컴포넌트 쓰지 않고 이런식으로 빼서 사용할 수 있음
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header;
