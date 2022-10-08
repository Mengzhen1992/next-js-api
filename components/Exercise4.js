import {useState} from 'react';

export default function Exercise4() {
  const [id, setId] = useState('');
  const [data4, setData4] = useState('...loading');

  async function fetchExercise4(id) {
    const res = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    });
    const message = await res.json();
    setData4(JSON.stringify(message, null, 4));
  }

  return (
    <>
      <h2>Exercise 4</h2>
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
          fetchExercise4(id);
        }}
      >
        Delete user via API
      </button>
      <pre>{data4}</pre>
    </>
  );
}
