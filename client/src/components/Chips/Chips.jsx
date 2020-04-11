import React from "react";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import { orange700, orange300, grey50 } from "material-ui/styles/colors";

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
};

function handleRequestDelete() {
  alert("You clicked the delete button.");
}

function handleTouchTap() {
  alert("You clicked the Chip.");
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export default class ChipList extends React.Component {
  render() {
    return (
      <div className="container" style={styles.wrapper}>
        <Chip
          backgroundColor={orange700}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={32} src="https://www.kroger.com/product/images/xlarge/front/0002840004144" />
          Cheetos!
        </Chip>
      </div>
    );
  }
}

{/* <Chip
          backgroundColor={orange700}
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={32} color={grey50} backgroundColor={orange300}>
            CH
          </Avatar>
          Cheetos!
        </Chip> */}
