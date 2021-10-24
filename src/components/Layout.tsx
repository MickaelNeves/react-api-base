import { withRouter } from "react-router-dom";

import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="content">{props.children}</div>
    </div>
  );
};

export default withRouter(Layout);
