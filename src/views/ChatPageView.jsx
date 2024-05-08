import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPageView = (props) => {
  const { projectId } = props;
  const chatProps = {
    projectId: "6d08ac0d-0d68-4205-a0cd-2372c4839a59",
    username: props.user.username,
    secret: props.user.secret,
  };
  return (
    <>
      <div style={{ height: "100vh" }}>
        <PrettyChatWindow {...chatProps} style={{ height: "100%" }} />
      </div>
    </>
  );
};

ChatsPageView.getInitialProps = async () => {
  const projectId = process.env.PROJECT_ID;
  return { projectId };
};

export default ChatsPageView;
