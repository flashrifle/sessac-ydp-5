const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

const initState = {
    bank: 0,
};

export const deposit = (money) => ({
    type: DEPOSIT,
    payload: money,
});
export const withdraw = (money) => ({
    type: WITHDRAW,
    payload: money,
});

const moneyReducer = (state = initState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return { bank: state.bank + Number(action.payload) };
        case WITHDRAW:
            return { bank: state.bank - Number(action.payload) };
        default:
            return state;
    }
};

export default moneyReducer;
