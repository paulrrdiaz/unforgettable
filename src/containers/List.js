import { connect } from "react-redux";
import List from "components/List";

const mapStateToProps = ({ lists }, ownProps) => ({
  list: lists.entities[ownProps.listId],
});

export default connect(mapStateToProps)(List);
