import css from "./Transactions.module.css";

export default function Transactions({ items }) {
	return (
		<table className={css.table}>
                  <thead className={css.table__head}>
                        <tr>
                           <th className={css.table__tittle}>Type</th>
                           <th className={css.table__tittle}>Amount</th>
                           <th className={css.table__tittle}>Currency</th>
                        </tr>
                  </thead>

			<tbody className={css.table__body}>
				{items.map(item => (
					<tr className={css.table__row} key={item.id}>
						<td className={css.table__date}>{item.type}</td>
						<td className={css.table__date}>{item.amount}</td>
						<td className={css.table__date}>{item.currency}</td>
                              </tr>
				))}
			</tbody> 
            </table>
	)
}

