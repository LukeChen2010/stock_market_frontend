export default function AppReducer(
  state = {
    profile: { id: null, balance: 0, portfolio_value: 0 },
    forceUpdate: false,
    requesting: false,
  },
  action
) {
  switch (action.type) {
    case "FORCE_UPDATE": {
      console.log("CALLED");
      return {
        forceUpdate: !state.forceUpdate,
      };
    }
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
