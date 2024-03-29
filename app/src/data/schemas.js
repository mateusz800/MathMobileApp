export const AuthSchema = {
    name: 'Auth',
    primaryKey: 'id',
    properties: {
        id: 'int',
        authenticated: 'bool',
        email: 'string',
        password: 'string',
        jwt: 'string'
    }
};


export const CourseSchema = {
    name: 'Course',
    primaryKey: 'id',
    properties: {
        id:'int',
        name: 'string',
        desc: 'string',
        image: 'string',
    }
};

export const ExerciseSchema = {
    name: 'Exercise',
    primaryKey: 'id',
    properties: {
        id: 'int',
        course: 'Course',
        question: 'string',
        correctAnswer: 'string',
        answers: 'string[]',
        solved: { type: 'bool', default: false }

    }
};

export const AnswerSchema = {
    name: 'Answer',
    primaryKey: 'exercise_id',
    properties: {
        exercise_id: 'int',
        solved: { type: 'bool', default: false },
        answer_date: 'int',
        incorrect_answer_count: { type: 'int', default: 0 }
    }
};

export const StartedCoursesSchema = {
    name:'StartedCourses',
    primaryKey: 'course_id',
    properties: {
        course_id: 'int',
        date_last_learning: 'date'
    }
};