import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class Password extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    count: 0,
    searchInput: '',
    showPsd: false,
  }

  onAddPassword = event => {
    event.preventDefault()

    const newPassword = {
      id: uuidv4(),
      website: `${event.target[0].value}`,
      username: `${event.target[1].value}`,
      password: `${event.target[2].value}`,
      isClicked: false,
    }
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  deletePassword = id => {
    const {passwordList} = this.state
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))

    const filteredPasswords = passwordList.filter(each => each.id !== id)
    this.setState({
      passwordList: filteredPasswords,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getImage = () => {
    const {count} = this.state
    if (count === 0) {
      return (
        <div className="no-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="card2-image"
          />
          <p className="no-para">no passwords</p>
        </div>
      )
    }
    return null
  }

  checkBoxClicked = event => {
    console.log(event.target.checked)
    this.setState({showPsd: event.target.checked})
  }

  render() {
    const {
      website,
      username,
      password,
      passwordList,
      count,
      searchInput,
      showPsd,
    } = this.state
    const searchResults = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="image"
        />

        <div className="card1">
          <div className="input-card">
            <h1 className="head">Add New Password</h1>

            <form
              className="contact-form-container"
              onSubmit={this.onAddPassword}
            >
              <div className="website">
                <div className="w-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="w-image"
                  />

                  <hr className="hr" />
                </div>
                <input
                  type="text"
                  value={website}
                  onChange={this.onChangeWebsite}
                  placeholder="Enter Website"
                  className="input"
                />
              </div>

              <div className="username">
                <div className="w-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="w-image"
                  />

                  <hr className="hr" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={this.onChangeUsername}
                  placeholder="Enter username"
                  className="input"
                />
              </div>

              <div className="password">
                <div className="w-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="w-image"
                  />

                  <hr className="hr" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={this.onChangePassword}
                  placeholder="Enter password"
                  className="input"
                />
              </div>

              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="card1-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="key-image"
            />
          </div>
        </div>

        <div className="card2">
          <div className="nav">
            <div className="psd-count">
              <h1 className="psd-head">your Passwords</h1>
              <p className="psd-b">{count}</p>
            </div>
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="search"
                className="search-i"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="label-checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onClick={this.checkBoxClicked}
            />
            <label htmlFor="checkbox" className="label">
              show Passwords
            </label>
          </div>

          <ul className="list-container">
            {searchResults.map(eachPassword => (
              <PasswordItem
                showPsd={showPsd}
                passwordDetails={eachPassword}
                key={eachPassword.id}
                //   toggleIsFavorite={this.toggleIsFavorite}
                deletePassword={this.deletePassword}
                //   colorDetails={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>

          {this.getImage()}
        </div>
      </div>
    )
  }
}
export default Password
