import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <li>
            <Link to="/">홈 페이지</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
