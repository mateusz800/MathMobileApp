import Realm from 'realm';

import {TopicSchema, ExerciseSchema} from './schemas'

export const initRealmDatabase = () => {
    Realm.open({ schema: [TopicSchema, ExerciseSchema] }).then(realm => {
        realm.write(() => {
            // TODO: sample exercise
            let algebraExercise1 = realm.create('Exercise', {
                id:1,
                question: 'Przykładowe pytanie',
                correctAnswer: 'Jakaś odpowiedź 1',
                answers: ['Jakaś odpowiedź 1', 'Jakaś odpowiedź 2', 'Jakaś odpowiedź 3', 'Jakaś odpowiedź 4']
            });
            let algebraTopic =  realm.create('Topic', {
                id: 1,
                name: 'algebra',
                desc: 'Zapoznaj się z algebrą',
                image: 'functions',
                exercises:[algebraExercise1]
            }, true);
            
            console.log(realm.objects('Topics')[0].exercises);
        });
        realm.close();
    }).catch(error => {
        console.log(error);
    });
};


export const realm = new Realm({ schema: [TopicSchema, ExerciseSchema] });

