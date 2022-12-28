import "./DropdownButton.css";

const DropdownButton = () => {
  // var dropdownButton = document.getElementById("dropdownMenuButton");
  // var dropdownMenu = dropdownButton.nextElementSibling;
  // /**
  //  * @dev an event listener to change
  //  * the text to option selected.
  //  */
  // dropdownMenu.addEventListener("click", (event) => {
  //   var target = event.target;
  //   if(target.classList.contains("dropdown-item")) {
  //     dropdownButton.textContent = target.textContent;
  //   }
  // });

  return (
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-custom dropdown-toggle"
        // class="btn btn-buttonColor dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="false"
        id="dropdownMenuButton"
      >
        Status
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">
          Review Changes
        </a>
        <a class="dropdown-item" href="#">
          In progress
        </a>
        <a class="dropdown-item" href="#">
          Approved
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          Rejected
        </a>
      </div>
    </div>
  );
};

export default DropdownButton;
