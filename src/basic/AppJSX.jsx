import './App.css';

function AppJSX() {
  const name = '엘리';
  const list = ['사과', '배', '귤', '감자'];
  return (
    <fragment>
      <h1>h1입니다.</h1>
      <h2>h2입니다.</h2>
      <p>{`강사이름은 ${name}입니다.`}</p>
      <img
        style={{ width: '300px', height: '200px' }}
        src="https://images.unsplash.com/photo-1719937051124-91c677bc58fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="이미지"
      ></img>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </fragment>
  );
}

export default AppJSX;
