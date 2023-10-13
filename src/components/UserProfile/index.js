import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails
  const defalutImage = `https://i.pinimg.com/originals/83/10/ab/8310ab709f70727b92fa1a6917897c82.jpg`

  return (
    <li className="user-card-container">
      <img
        src={imageUrl}
        className="avatar"
        alt="avatar"
        onError={e => {
          // Replacing  with default url
          e.target.src = defalutImage
        }}
      />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
    </li>
  )
}
export default UserProfile
