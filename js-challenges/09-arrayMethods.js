const students = [ 
    {id: 1, name: 'peter', score: 80, favSubject: 'math'},
    {id: 1, name: 'bob', score: 76, favSubject: 'history'},
    {id: 1, name: 'harold', score: 91, favSubject: 'art'},
    {id: 1, name: 'jake', score: 89, favSubject: 'science'},
    {id: 1, name: 'jim', score: 93, favSubject: 'geography'}
];

const updatedStudents = students.map(function(student)
{
    student.role = 'student';
    return student;
});

console.log(updatedStudents);