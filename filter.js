/**
 * To run this file in Gitpod, use the
 * command node filter.js in the terminal
 */

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
const oldEnough = people.filter(people => people.age >= 21);
console.log(oldEnough);

const paul = people.filter(p => p.name == 'Paul');
console.log(paul);

const paulObj = people.filter(p => p.name == 'Paul')[0];
console.log(paulObj);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ],
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ],
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ],
  },
];
// more difficult to read

// const candidates = students.filter(student => {
//   const strongSkills = student.skills.filter(
//     skills => skills.yrsExperience >= 5
//   );
//   return strongSkills.length > 0;
// });

// a more easy to read and elegant approach

const has5YrsExp = skills => skills.yrsExperience >= 5;
const hasStrongSkills = student => {
  const strongSkills = student.skills.filter(has5YrsExp);
  return strongSkills.length > 0;
};
const candidates = students.filter(hasStrongSkills);

console.log(candidates);

// extract and print only candidates names
const candidatesNames = candidates.map(candidate => candidate.name);

console.log('Candidates:', candidatesNames);
