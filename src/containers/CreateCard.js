import { connect } from "react-redux";
import CreateCard from "components/CreateCard";
import { createCard } from "store/actions/cards";

// mapStateToProps
// mapDispatchToProps
export default connect(null, {
  createCard,
})(CreateCard);
