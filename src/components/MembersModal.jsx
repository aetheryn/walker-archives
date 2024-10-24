import React from "react";
import ReactDOM from "react-dom";
import styles from "./MembersModal.module.css";

const OverLay = (props) => {
  return (
    <div
      className={`big-container ${styles.backdrop}`}
      onClick={() => props.setShowModal(false)}
    >
      <div className={styles.modal}>
        <h2>Members</h2>

        <br />
        <table>
          {props.members.map((member) => (
            <tr>
              {member.indexOf(":") !== -1 ? (
                <>
                  <td style={{ fontWeight: "bold" }}>{member.split(":")[0]}</td>
                  <td>{member.split(":")[1]}</td>
                </>
              ) : (
                <td>{member}</td>
              )}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

const MembersModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          setShowModal={props.setShowModal}
          members={props.members}
        ></OverLay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default MembersModal;
