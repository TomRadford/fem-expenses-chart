import Bar from "./Bar";

const spendingData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

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
            <div className="balance__circles">
              <div className="balance__circles circle-one"></div>
              <div className="balance__circles circle-two"></div>
            </div>
          </div>
        </aside>
        <main className="grid__main">
          <div className="stats">
            <h2>Spending - Last 7 days</h2>
            <div className="stats__chart">
              {spendingData.map((value) => (
                <div key={value.amount} className="stats__block">
                  <Bar value={value}>
                    <div className="stats__tooltip">${value.amount}</div>
                  </Bar>
                  <div className="stats__label">{value.day}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
