// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => (
  <div className="Person">
    <p className="Person__name">My name is {person.name}</p>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">
      {person.isMarried
        ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'}
    </p>
  </div>
);
