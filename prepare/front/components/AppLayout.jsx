import { Link } from 'next/link';
import PropTypes from 'prop-types';
const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link>노드버드</Link>
        <Link>프로필</Link>
        <Link>회원가입</Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
