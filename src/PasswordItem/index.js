import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, showPsd} = props
  const {website, username, id, password} = passwordDetails

  const onButtonClick = () => {
    deletePassword(id)
  }

  return (
    <li className="list-items">
      <div className="card">
        <button type="button" className="round-button">
          <p className="initial">{website.slice(0, 1).toUpperCase()}</p>
        </button>

        <div className="TEXT">
          <p>{website}</p>
          <p>{username}</p>
          {showPsd ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
              className="star-image"
            />
          )}
        </div>

        <button type="button" className="del-container" onClick={onButtonClick}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="Delete"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
