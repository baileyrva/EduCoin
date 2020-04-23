import React from "react";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import {
  orange700,
  green700,
  red400,
  grey400,
} from "material-ui/styles/colors";

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: "flex",
    paddingTop: "4rem",
    marginLeft: "7rem",
    flexWrap: "wrap",
  },
};

const ChipList = ({ handleTouchTap }) => (
  <div className="container" style={styles.wrapper}>
    <Chip
      className="Chip"
      backgroundColor={orange700}
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar
        size={32}
        src="https://www.kroger.com/product/images/xlarge/front/0002840004144"
      />
      Cheetos!
    </Chip>
    <Chip
      className="Chip"
      backgroundColor={green700}
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar
        size={32}
        src="https://media.treehugger.com/assets/images/2016/07/green-forest-trees.jpg.860x0_q70_crop-scale.jpg"
      />
      Green Time!
    </Chip>
    <Chip
      className="Chip"
      backgroundColor={red400}
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar
        size={32}
        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2019/10/halloween-candy-taste-test-ft-blog1019.jpg"
      />
      Candy!
    </Chip>
    <Chip
      className="Chip"
      backgroundColor={grey400}
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar
        size={32}
        src="https://dynamic.zacdn.com/fQmbSJP5TwR2C_pYCMMaLX3cNqM=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.ph.zalora.net/p/nike-9220-7598131-1.jpg"
      />
      Prize Bag!
    </Chip>
  </div>
);

export default ChipList;
