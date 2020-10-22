export const TopicSchema = {
    name: 'Topic',
    primaryKey: 'name',
    properties: {
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
        topic: 'Topic',
        question: 'string',
        correctAnswer: 'string',
        answers: 'string[]',
        solved: { type: 'bool', default: false }

    }
}

export const AnswerSchema = {
    name: 'Answer',
    primaryKey: 'exercise_id',
    properties: {
        exercise_id: 'int',
        solved: { type: 'bool', default: false },
        answer_date: 'int',
        incorrect_answer_count: { type: 'int', default: 0 }
    }
}