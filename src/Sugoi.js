import { useState } from "react";

export const Sugoi = () => {
  const [sugoCount, setSugoCount] = useState(0);

  const sugo = () => {
    setSugoCount(sugoCount + 1);
  };

  return (
    <div>
      <p>めっちゃすごい。すごすぎ。Sugoi!</p>
      <p>すごカウント:{sugoCount}</p>
      <button onClick={sugo}>すごいボタン</button>
      <button onClick={sugo}>すごいボタン2</button>
    </div>
  );
};
