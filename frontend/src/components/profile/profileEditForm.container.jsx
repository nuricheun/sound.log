import { fetchUser, updateUser } from "../../redux/actions/authAction";
import { ProfileEditForm } from "./profileEditForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ currentUser }, { history }) => ({
  currentUser,
  history,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm)
);