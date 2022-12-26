import "./DropdownButton.css";

const DropdownButton = () => {
  return (
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-custom dropdown-toggle"
        // class="btn btn-buttonColor dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="false"
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
