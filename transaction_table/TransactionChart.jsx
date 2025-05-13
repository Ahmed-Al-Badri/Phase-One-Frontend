import "./TransactionChart.css";

export default function TransactionChart({ transactions }) {
  return (
    <div>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="transaction-chart">
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {transactions.flatMap((txn) =>
              txn.items.map((item, i) => (
                <tr key={`${txn.id}-${i}`}>
                  <td>{item.name}</td>
                  <td>{txn.Date}</td>
                  <td>
                    ${parseFloat(item.price).toFixed(2)} {item.currency}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
