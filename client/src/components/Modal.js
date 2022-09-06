import { confirmAlert } from "react-confirm-alert";

function Modal() {
  const submit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "정말 로그아웃 하시겠습니까?",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Yes"),
        },
        {
          label: "No",
          onClick: () => alert("No"),
        },
      ],
    });
  };

  // return (
  //   <div className="container">
  //     <button onClick={submit}>Logout</button>
  //   </div>
  // );
}
export default Modal;
