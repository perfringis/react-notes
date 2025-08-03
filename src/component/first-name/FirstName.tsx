// to inject a data into a component u have to use {} curly braces

const user = {
  name: "Hedy Lamarr",
};

function FirstName() {
  return <h1>{user.name}</h1>;
}

export default FirstName;
