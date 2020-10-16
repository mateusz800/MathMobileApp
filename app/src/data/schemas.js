export const TopicSchema = {
    name: 'Topic',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        desc: 'string',
        image: 'string',
        exercises: 'Exercise[]'
    }
};

export const ExerciseSchema ={
    name: 'Exercise',
    primaryKey: 'id',
    properties:{
        id:'int',
        question:'string',
        correctAnswer:'string',
        answers: 'string[]'
    }
}