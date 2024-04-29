import { useNavigate } from 'react-router-dom';

import './header.style.css'

interface Props {
  menus : Array<string>,
  logoStyle: string,
}

const Header = ({ menus, logoStyle }: Props) => {

  // Hooks instance declarations
  const navigate = useNavigate();

  const getTextInSmallCase = (text: string) => text.toLocaleLowerCase();

  const getMenusList = () => {
    return menus.map((menu, ind) => {
      return <li key={ind}><a href={`#${getTextInSmallCase(menu)}`}>{menu}</a></li>
    });
  }

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-nav">
          <div id="logo" className='logo' onClick={() => navigate('/')}>
            {logoStyle === 'style1' ?
              <img src="src/assets/images/JD-logo.svg" alt="jd" title="JD" />
            :
              <img src="src/assets/images/JD-logo.svg" alt="jd" title="JD" />
            }
          </div>
          <nav>
            {menus?.length ?
              <ul>
                {getMenusList()}
              </ul>
            :
              <></>
            }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;