export default function AppReducer(
  state = {
    profile: { id: null, balance: 0, portfolio_value: 0 },
    stockQuote: {
      symbol: "",
      name: "",
      exchange: "",
      industry: "",
      previous_close: 0,
      current_price: 0,
    },
    requesting: false,
  },
  action
) {
  switch (action.type) {
    case "START_GET_PROFILE_REQUEST": {
      return {
        profile: action.profile,
        requesting: true,
      };
    }
    case "GET_PROFILE": {
      return {
        profile: action.profile,
        requesting: false,
      };
    }
    default:
      return state;
  }
}
