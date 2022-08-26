import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { viewPostData } from "../../../../Store/Actions/InstagramApp";

export const Gallery = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.instagramReducer);

  const { user } = data;

  const sendData = (post) => {
    dispatch(
      viewPostData({
        postDetails: post,
        bool: true,
      })
    );
  };

  return (
    <div className="margin-16 padding-16 flex-row-center grid-layout">
      {/* 'Rendering list ot post images' */}

      {user?.posts.map((eachItem) => {
        return (
          <>
            <div className="gallery__container">
              <img
                src={eachItem.image}
                className="image"
                key={eachItem.key}
                alt={`${eachItem.id}`}
              />
              <div
                className="gallery__image flex-row-center"
                style={{ height: "100%", width: "100%" }}
                onClick={() => sendData(eachItem)}
              >
                <div className="flex-row-center">
                  <FavoriteIcon />
                  <span>{eachItem.likes}</span>
                </div>
                <div className="flex-row-center">
                  <ChatBubbleIcon />
                  <span>{eachItem.comments}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
