import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { TrackItemButtonDiv } from "../designSystem/trackStyledComponents";
import { openModal } from "../../redux/actions/modalAction";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const mapStateToProps = ({ currentUser: { userId } }, { track }) => ({
  userId,
  track,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (payload) => dispatch(openModal(payload)),
});

const DeleteButtonDiv = styled(TrackItemButtonDiv)`
  right: 0;
  top: 0;
`;

const DeleteButton = ({ track, userId, openModal }) => {
  const useStyles = makeStyles({
    icon: {
      color: "#fff",
      opacity: "0.5",
      "&:hover": { color: "#dc4e76", opacity: "0.6" },
    },
  });
  const classes = useStyles();
  if (track.artistId !== userId) return null;

  return (
    <DeleteButtonDiv>
      <Tooltip title="Delete track">
        <DeleteIcon
          className={classes.icon}
          onClick={() => openModal({ type: "confirm", data: track.trackId })}
        />
      </Tooltip>
    </DeleteButtonDiv>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
