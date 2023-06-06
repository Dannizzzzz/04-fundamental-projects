import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <section className="menu">
        <Title text="Our title" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
