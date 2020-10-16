import React from "react";
import { useStateValue } from "../../../StateProvider";
import Story from "./Story/Story";
import "./StoryReel.css";

function StoryReel() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
        profilesrc={user.photoURL}
        title={user.displayName}
      />
      <Story
        image="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profilesrc="https://freesvg.org/img/myAvatar.png"
        title="Edwin Kamau"
      />
      <Story
        image="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profilesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAXbEct3MfctRSCBVoXpZ3_JO-xtK7hHmy2Q&usqp=CAU"
        title="Kelvin Mwangi"
      />
      <Story
        image="https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profilesrc="https://st3.depositphotos.com/1007566/13024/v/950/depositphotos_130240748-stock-illustration-young-man-avatar-character.jpg"
        title="Peter Ouma"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTD0gqmn8glF0YHkvavt8og3QyOkOGI9rA71w&usqp=CAU"
        profilesrc="https://png.pngtree.com/png-clipart/20190705/original/pngtree-cartoon-european-and-american-character-avatar-design-png-image_4366075.jpg"
        title="Peris Wanjiku"
      />
    </div>
  );
}

export default StoryReel;
