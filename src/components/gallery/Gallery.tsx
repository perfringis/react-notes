// component is isolated piece of UI
// component can be small as button or big such as whole page

import Profile from "../profile/Profile";

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default Gallery;
