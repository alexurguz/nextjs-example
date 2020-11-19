import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { data, error } = useSWR(
    () => `/api/people`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  console.log(JSON.stringify(data));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((person) => (
            <tr key = {person.id}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.hair_color}</td>
              <td>{person.skin_color}</td>
              <td>{person.eye_color}</td>
              <td>{person.gender}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}