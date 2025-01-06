import React, { useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
  // const [loading, setLoading] = useState(false);  -> useProducts 커스텀 훅으로 보내버림
  // const [error, setError] = useState();
  // const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked }); // -> 커스텀훅을 호출만 해주면됨
  const handleChange = () => setChecked((prev) => !prev);

  // useEffect(() => {                                -> useProducts 커스텀 훅으로 보내버림
  //   setLoading(true);
  //   setError(undefined);
  //   fetch(`data/${checked ? 'sale_' : ''}products.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('데이터 받아옴');
  //       setProducts(data);
  //     })
  //     .catch((e) => setError('에러가 발생했음'))
  //     .finally(() => setLoading(false));
  //   return () => console.log('깨끗하게 청소됨');
  // }, [checked]);

  if (loading) {
    return (
      <strong style={{ display: 'block', margin: '50px', fontSize: '1.5rem' }}>
        Loading...
      </strong>
    );
  } else if (error) {
    return <p> {error} </p>;
  }

  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">show Only Hot Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
