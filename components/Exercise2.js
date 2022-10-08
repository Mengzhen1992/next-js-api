import {useState} from 'react';

export default function Exercise2() {
  const [data2, setData2] = useState('...loading');
  const [id, setId] = useState('');

  async function fetchExercise2(id) {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    setData2(JSON.stringify(data, null, 4));
  }

  return (
    <>
      <h2>Exercise 2</h2>
      <form>
        <label htmlFor="id">Enter id:</label>
        <input
          id="id"
          name="id"
          value={id}
          onChange={event => setId(event.target.value)}
          style={{marginBottom: '1em'}}
        />
      </form>
      <button
        onClick={() => {
          fetchExercise2(id);
        }}
      >
        Load example Data from api/users/[id]
      </button>
      <pre>{data2}</pre>
    </>
  );
}
