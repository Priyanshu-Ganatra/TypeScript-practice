// utility types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToupdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToupdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to db
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};
console.log(assignVerified);

// assignVerified.grade = 100 // error: Cannot assign to 'grade' because it is a read-only property.

// recordAssignment(assignGraded) // error: Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'. Types of property 'verified' are incompatible. Type 'boolean | undefined' is not assignable to type 'boolean'. Type 'undefined' is not assignable to type 'boolean'.
// recordAssignment(assignVerified) // error: Argument of type 'Readonly<Assignment>' is not assignable to parameter of type 'Required<Assignment>'. Types of property 'verified' are incompatible. Type 'boolean | undefined' is not assignable to type 'boolean'.

// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U" | false;

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  // Kelly: "a" // Type '"a"' is not assignable to type 'LetterGrades'. Did you mean '"A"'?
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract 

type adjustedGrade = Exclude<LetterGrades, false>

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable 

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType 

//type newAssign = { title: string, points: number }

// const createNewAssign = (title: string, points: number): newAssign => {
//     return { title, points }
// }

const createNewAssign = (title: string, points: number) => {
    return { title, points,  }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters 

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))