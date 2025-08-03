import AdminPanel from "../admin-panel/AdminPanel";
import LoginForm from "../login-form/LoginForm";

function MainPage() {
  let content;
  const isLoggedIn = true;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return <div>{content}</div>;
}

export default MainPage;
