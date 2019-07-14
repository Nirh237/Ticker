import React from 'react';
import MessageData from './Message';

const MessageList = (data) => {

    return (
        <div className="List">
            {data.data.map((item, index) => <MessageData key={index} data={item} />)}
        </div>
    );
};

export default MessageList;