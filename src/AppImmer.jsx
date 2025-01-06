import React from 'react';
import { useImmer } from 'use-immer';

export default function AppImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸실건가요?');
    const current = prompt('새이름은 무엇으로 하실건가요?');
    const title = prompt('새 타이틀은?');
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
      mentor.title = title;
    });
  };
  const handleAdd = () => {
    const newName = prompt('새로 추가하고자 하는 이름은?');
    const newTitle = prompt('새로운 직위는?');
    updatePerson((person) => {
      person.mentors.push({ name: newName, title: newTitle });
    });
  };
  const handleDelete = () => {
    const deletedName = prompt('삭제할 사람은?');
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === deletedName);
      person.mentors.splice(index, 1);
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토변경하기</button>
      <button onClick={handleAdd}>멘토추가하기</button>
      <button onClick={handleDelete}>멘토삭제하기</button>
    </div>
  );
}
const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
