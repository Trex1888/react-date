import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Rocky"
        message="Dog's gone fishing 🎣"
        timestamp="10 mins ago"
        profilePic="http://weneedfun.com/wp-content/uploads/2015/10/Cute-puppy-Pictures-29.jpg"
      />
      <Chat
        name="Debbie"
        message="Bark, I'm so hungry! 😦"
        timestamp="33 mins ago  "
        profilePic="https://tse1.mm.bing.net/th?id=OIP.X5kMkFdo1M3AQM8jwly-9wHaHa&pid=Api&P=0&w=300&h=300"
      />
      <Chat
        name="Punky"
        message="Looks like rain 🌩"
        timestamp="1 hour ago"
        profilePic="http://hddesktopwallpapers.in/wp-content/uploads/2015/09/dogs-photos-free-download.jpg"
      />
      <Chat
        name="Jimmy"
        message="Let's go for a walk 🐕"
        timestamp="Yesterday"
        profilePic="https://kids.kiddle.co/images/thumb/a/a8/Lava_the_sled_dog.jpg/676px-Lava_the_sled_dog.jpg"
      />
    </div>
  );
}

export default Chats;
