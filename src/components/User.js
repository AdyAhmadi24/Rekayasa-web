import React, { useEffect, useState } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("http://unhas.ac.id/v2/wp-json/wp/v2/posts/?_embed");
      const data = await res.json();
      setProfile(data);
    }, 3000);
  });

  return (
    <div className="user">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <a dangerouslySetInnerHTML={{ __html: profile.excerpt.rendered }} />
        </div>
      )}

      {!profile && <SkeletonProfile theme="dark" />}
    </div>
  );
};

export default User;
