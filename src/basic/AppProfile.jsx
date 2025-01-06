import './App.css';
import Profile from '../component/Profile';
import Avatar from '../component/Avatar';
export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨');
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        url="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        isNew={true}
      />
      <Profile
        url="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="김인서"
        title="백엔드 개발자"
        isNew={true}
      />
      <Profile
        url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="김재규"
        title="혁명가"
      />
      <Profile
        url="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="김혁진"
        title="1진"
      />
    </>
  );
}
