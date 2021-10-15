import './index.css'

const ImageItem = props => {
  const {imageDetails, imageCorrect} = props
  const {id, thumbnailUrl} = imageDetails

  const checkImage = () => {
    imageCorrect(id)
  }

  return (
    <li className="thumbnail-container">
      <button type="button" className="image-button" onClick={checkImage}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image-size"
        />
      </button>
    </li>
  )
}

export default ImageItem
