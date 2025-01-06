export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { newName, newTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: newName, title: newTitle }],
      };
    }
    case 'removed': {
      const { deletedName } = action;
      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== deletedName),
      };
    }
    default:
      throw Error(`알수없는 액션타입입니다.${action.type}`);
  }
}
