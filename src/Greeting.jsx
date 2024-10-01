function Greeting() {
  return (
    <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
  );
}

function Pizza() {
  return <img src="assets/originalMe.png" alt="" />;
}

function Test() {
  return (
    <div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export { Greeting, Pizza, Test };
