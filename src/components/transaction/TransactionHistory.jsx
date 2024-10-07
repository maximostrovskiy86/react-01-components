import PropTypes from "prop-types";
import {RowTransaction, TransactionHistoryWrapper, TableHEad} from "./TransactionHistory.styled";

const TransactionHistory = ({items}) => {
    return (
        <TransactionHistoryWrapper>
            <h2>Transactions</h2>
            <table>
                <thead>
                <TableHEad>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableHEad>
                </thead>
                <tbody>
                {items.map(item => (
                    <RowTransaction key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </RowTransaction>
                ))}
                </tbody>
            </table>
        </TransactionHistoryWrapper>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;
