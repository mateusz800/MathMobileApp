
import { realm } from './index';
import { ExerciseSchema, AnswerSchema, TopicSchema } from './schemas';


export const getTopicExercises = (topicName, amount) => {
    return realm.objects('Exercise').filtered("topic.name = 'algebra' && solved=false").slice(0, amount);
};


export const saveAnswer = (exerciseId, solved) => {
    let answerObj;
    try {
        answerObj = realm.objectForPrimaryKey('Answer', exerciseId);
    }
    catch (e) {
        answerObj = null;
    }

    Realm.open({ schema: [AnswerSchema, ExerciseSchema, TopicSchema] }).then(realm => {
        if (solved) {
            realm.write(() => {
                realm.objectForPrimaryKey('Exercise', exerciseId).solved = true;
            });
        }
        if (!answerObj) {
            // create new one
            realm.write(() => {
                let answer = realm.create('Answer', {
                    exercise_id: exerciseId,
                    solved: solved,
                    answer_date: Date.now(),
                });
            });
        }
        else {
            // update
            realm.write(() => {
                answerObj.incorect_answer_count += 1;
                answerObj.answer_date = Date.now();
            });
        }
    });
};

export const clearAllAnswers = () => {
    Realm.open({ schema: [AnswerSchema, ExerciseSchema, TopicSchema] }).then(realm => {
        realm.write(() => {
            realm.objects('Answer').map(obj => {
                console.log('ok');
                if (obj != undefined) {
                    console.log(obj);
                    realm.delete(obj);
                }
            });
            realm.objects('Exercise').map(obj => { obj.solved = false ; console.log(obj)});
        })
    });
}