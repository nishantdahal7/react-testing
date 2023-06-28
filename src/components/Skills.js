export default function Skills({ skills }) {
  return (
    <div>
      <h2>List Of Skills</h2>
      <ul>
        {skills.map((skill) => {
          <li key={skill.id}>{skill.name}</li>;
        })}
      </ul>
    </div>
  );
}
