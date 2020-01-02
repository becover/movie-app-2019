import React, {useEffect} from 'react';

const Detail = ({history, location}) => {
  const {year, title, summary, poster } = location;
  useEffect(()=>{
    if(location.title === undefined) history.push('/')
  },[location,history])
  return (
    <div className="detail__backgound">
      <div className="detail__img">
        <img src={poster} alt={title} title={title} />
      </div>
      <h2>{title}</h2>
      <h3>{year}</h3>
      <p>{summary}</p>
    </div>
  )
}

export default Detail;