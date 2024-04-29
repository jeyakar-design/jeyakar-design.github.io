interface Props {
  hatType: number,
  content: string,
  stars: Array<string>
}

const HatStarContent = ({ hatType, content, stars }: Props) => {

  const getStarsList = () => {
    return stars.map((starType, ind) => {
      return (
        <li key={ind}>
          <img src={`src/assets/images/${starType}-star.svg`} alt={`${starType}-star`} title="Star" />
        </li>
      );
    })
  }

  return (
    <>
      <img src={`src/assets/images/hat0${hatType}.png`} className="title-img" alt="user research" title="User Research" />
      <h6>{content}</h6>
      {stars?.length ?
        <ul className="list-no-style">
          {getStarsList()}
        </ul>
      :
        <></>
      }
    </>
  )
}

export default HatStarContent;
