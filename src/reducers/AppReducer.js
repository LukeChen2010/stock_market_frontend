export default function PortfolioReducer(
  state = {
    profile: { id: null, balance: 0, portfolio_value: 0 },
    requesting: false,
    darkMode: false,
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
    case "TOGGLE_DARK_MODE": {
      return {
        profile: state.profile,
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
}
