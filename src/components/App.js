const App = () => {
  return (
    <div className="flex">
      <div className="grid">
        <aside className="grid__aside">
          <div className="balance">
            <div>
              <p>My balance</p>
              <h2>$921.48</h2>
            </div>
            <div className="circles">
              <div className="circle-one"></div>
              <div className="circle-two"></div>
            </div>
          </div>
        </aside>
        <main className="grid__main">
          <div className="stats">
            <h3>Spending - Last 7 days</h3>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
