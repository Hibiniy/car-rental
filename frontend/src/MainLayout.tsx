import Message from "./components/Message";

interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className=" flex h-screen w-screen flex-row ">
      <div className=" w-1/6 bg-primary-400 ">
        <Message />
        <Message />
      </div>
      <div className=" w-2/3 bg-secondary-400">{children}</div>
      <div className=" w-1/6 bg-information-400">
        <Message />
      </div>
    </div>
  );
};
export default MainLayout;
