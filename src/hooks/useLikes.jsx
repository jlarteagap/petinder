import { useState } from "react";

export const useLikes = () => {
  const [like, setLike] = useState(false);
  const dislike = () => {
    setLike(false);
  };
  const heartClick = () => {
    setLike((like) => !like);
  };

  return {
    like,
    dislike,
    heartClick,
  };
};
