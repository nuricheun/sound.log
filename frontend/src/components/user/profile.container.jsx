import { UserProfile } from "./profile";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/authAction";

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
