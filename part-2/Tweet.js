function Tweet({ username, name, date, msg }) {
  return (
    <div>
      <p>Username: {username}</p>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Tweet: {msg}</p>
    </div>
  );
}
