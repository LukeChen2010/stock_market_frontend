export function fetchProfile() {
  return (dispatch) => {
    dispatch({ type: "START_GET_PROFILE_REQUEST" });
    fetch("http://localhost:3000/users/1")
      .then((response) => response.json())
      .then((profile) => dispatch({ type: "GET_PROFILE", profile }));
  };
}
