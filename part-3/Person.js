function Person({name, age, hobbies}) {
    let voting = age >= 18 ? "Get out and vote!" : "You must be 18 to vote.";
    let slicedName = name.slice(0, 6);
    let hobbyList = hobbies.map(hobby => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn more about this person!</p>
      <ul>
        <li>Name: {slicedName}</li>
        <li>Age: {age}
        </li>
        <li>Hobbies: {hobbyList}</li>
      </ul>
      <h3>{voting}</h3>
    </div>
  );
}
