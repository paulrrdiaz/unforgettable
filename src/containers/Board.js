import { connect } from "react-redux";
import Board from "components/Board";

const mapStateToProps = ({ lists }) => ({
  lists: lists.ids,
});

export default connect(mapStateToProps)(Board);
