import React from "react";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import { orange700, green700 } from "material-ui/styles/colors";

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

const handleTouchTap = (props) => {
  props.allUsers.filter((e) => e.email === condition)
  
  .map(e => e.columns)
  .reduce((prev, current) => prev.concat(current), [])
  .map((column, index) => <p key={ index }>{ column.name }</p>)

}
const ChipList = (props) => (
  
      <div className="container" style={styles.wrapper}>
        {/* {props.user.Coin} */}
        <Chip
          backgroundColor={orange700}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={32} src="https://www.kroger.com/product/images/xlarge/front/0002840004144" />
          Cheetos!
        </Chip>
        <Chip
          backgroundColor={green700}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={32} src="https://media.treehugger.com/assets/images/2016/07/green-forest-trees.jpg.860x0_q70_crop-scale.jpg" />
          60min Green Time
        </Chip>
      </div>
    );

    export default ChipList; 
