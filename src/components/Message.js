import React from 'react';

const MessageData = (data) => {
  return (
    <div className="card">
      <img className="image" src={data.data.pic} alt="" />
      <h1>{data.data.name}</h1>
      <p className="date">{data.data.date}</p>
      <p>{data.data.text}</p>
    </div>
  );
};

export default MessageData;


