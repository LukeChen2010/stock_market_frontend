export default function AppReducer(
  state = {
    portfolioValue: 0,
    balance: 0,
    requesting: false,
  },
  action
) {
  switch (action.type) {
    case "START_GET_PROFILE_REQUEST": {
      return {
        ...state,
        requesting: true,
      };
    }
    case "GET_PROFILE": {
      return {
        portfolioValue: action.profile.portfolio_value,
        balance: action.profile.balance,
        requesting: false,
      };
    }
    default:
      return state;
  }
}
