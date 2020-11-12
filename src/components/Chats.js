import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Buffalo"
        message="Bear's gone fishing 🐻"
        timestamp="10 mins ago"
        profilePic="..."
        // profilePic="https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/imr_7591-2-e1564167534401-1200x633.jpg"
      />
      <Chat
        name="Deb"
        message="Where did you come from?"
        timestamp="33 mins ago"
        profilePic="https://tse3.mm.bing.net/th?id=OIP.xST76_9yjW6R-Azv_VBfhAHaKl&pid=Api&P=0&w=300&h=300"
      />
      <Chat
        name="Punky"
        message="Divided sky the wind blows high"
        timestamp="1 hour ago"
        profilePic="https://www.bpimaging.com/assets/uploads/2015/02/business-portrait-photography-female.jpg"
      />
      <Chat
        name="Jungleman"
        message="Welcome to the Jungle!"
        timestamp="Yesterday"
        profilePic="https://www.cardschat.com/news/wp-content/uploads/2017/08/jungleman.jpg"
      />
    </div>
  );
}

export default Chats;
