import { useState } from "react";

import AuthPageView from "@/views/AuthPageView";
import ChatsPageView from "@/views/ChatPageView";

export default function Home() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPageView onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPageView user={user} />;
  }
}
