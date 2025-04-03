// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <div className="Person">
    <p className="Person__name">My name is {name}</p>

    {age && <p className="Person__age">I am {age}</p>}

    <p className="Person__partner">
      {isMarried
        ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'}
    </p>
  </div>
);

export default Person;
