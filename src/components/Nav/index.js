import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const handleClick = item => {
  console.log(item);
  return item;
};

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  // We must use a Hook to trigger a re-render on a variable value change, useEffect is an API that reflects the lifecycle methods of the component, such as when the component mounts, unmounts, or updates.

  // The second argument directs the hook to re-render the component on changes to the value of this state. In other words, if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user.
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {' '}
            📸
          </span>{' '}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick('About')}>
              About me
            </a>
          </li>
          <li className={'mx-2'}>
            <span onClick={() => handleClick('Contact')}>Contact</span>
          </li>
          {categories.map(category => (
            <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
              <span onClick={() => setCurrentCategory(category)}>{capitalizeFirstLetter(category.name)}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
