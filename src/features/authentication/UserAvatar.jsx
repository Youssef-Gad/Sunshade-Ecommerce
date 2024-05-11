import { Link } from "react-router-dom";
import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  return (
    <Link to="/profile" className="w-[2.5rem] gap-5 flex items-center">
      {user?.user_metadata?.avatar_url ? (
        <img
          src={user.user_metadata.avatar_url}
          alt="user avatar"
          className="rounded-full"
        />
      ) : (
        <img
          src="/default-user.jpg"
          alt="user avatar"
          className="rounded-full"
        />
      )}
    </Link>
  );
}

export default UserAvatar;
