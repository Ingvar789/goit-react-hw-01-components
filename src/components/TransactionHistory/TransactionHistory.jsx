import PropTypes from 'prop-types';
import {TransactionHistoryStyled} from './TransactionHistory.styled'
function TransactionHistory({data}) {
    return (
        <TransactionHistoryStyled className="transaction-history">
            <thead className='table-head'>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            {data.map(({id, type, amount, currency}) => {
                return (
                <tbody className='table-body' key={id}>
                    <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>
                </tbody>
                        );
                })}          
        </TransactionHistoryStyled>
    );
};
export { TransactionHistory };
    
    TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }))
}