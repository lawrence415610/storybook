import React from "react";
import "./TaskCard.css";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} type={"task"} index={index}>
      {(provided) => (
        <div
          className={"taskCard"}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="content">
            <div className={"name"}>{task.content.name}</div>
            <button>
              <span className={"material-icons more"}>more_horiz</span>
            </button>
          </div>
          <div className="extra">
            <div className="actions">
              <ul>
                <li>
                  <div className="button">a</div>
                </li>
                <li>
                  <div className="button">b</div>
                </li>
              </ul>
            </div>
            <div className="info">
              <ul>
                <li>
                  <span>1</span>
                  <span className={"material-icons"}>perm_identity</span>
                </li>
                {/*TODO - Unknown style conflict to be fixed when integrate components*/}
                {/*<li>*/}
                {/*  <span className={"material-icons"}>calender_today</span>*/}
                {/*</li>*/}
                <li>
                  <span>2</span>
                  <span className={"material-icons"}>call_split</span>
                </li>
                <li>
                  <span>3</span>
                  <span className={"material-icons"}>thumb_up_alt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
