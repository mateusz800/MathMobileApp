import Realm from 'realm';

import { TopicSchema, ExerciseSchema, AnswerSchema } from './schemas'

export const realm = new Realm({ schema: [TopicSchema, ExerciseSchema] });

export const initRealmDatabase = () => {
    Realm.open({ schema: [TopicSchema, ExerciseSchema] }).then(realm => {
        realm.write(() => {
            // topics
            let algebraTopic = realm.create('Topic', {
                name: 'algebra',
                desc: 'Zapoznaj się z algebrą',
                image: 'functions',
                exercises: [algebraExercise1, algebraExercise2, algebraExercise3, algebraExercise4, algebraExercise5, algebraExercise6]
            }, true);

            // exercises
            let algebraExercise1 = realm.create('Exercise', {
                id: 1,
                question: 'Przykładowe pytanie',
                correctAnswer: 'Jakaś odpowiedź 1',
                answers: ['Jakaś odpowiedź 1', 'Jakaś odpowiedź 2', 'Jakaś odpowiedź 3', 'Jakaś odpowiedź 4'],
                topic:algebraTopic
            });
            let algebraExercise2 = realm.create('Exercise', {
                id: 2,
                question: 'Przykładowe pytanie 2',
                correctAnswer: 'Jakaś odpowiedź 1',
                answers: ['Jakaś odpowiedź 1', 'Jakaś odpowiedź 2', 'Jakaś odpowiedź 3', 'Jakaś odpowiedź 4'],
                topic:algebraTopic
            });
            let algebraExercise3 = realm.create('Exercise', {
                id: 3,
                question: 'Przykładowe pytanie 3',
                correctAnswer: 'Jakaś odpowiedź 1',
                answers: ['Jakaś odpowiedź 1', 'Jakaś odpowiedź 2', 'Jakaś odpowiedź 3', 'Jakaś odpowiedź 4'],
                topic:algebraTopic
            });
            let algebraExercise4 = realm.create('Exercise', {
                id: 4,
                question: 'Przykładowe pytanie 4',
                correctAnswer: 'Jakaś odpowiedź 1',
                answers: ['Jakaś odpowiedź 1', 'Jakaś odpowiedź 2', 'Jakaś odpowiedź 3', 'Jakaś odpowiedź 4'],
                topic:algebraTopic
            });
            let algebraExercise5 = realm.create('Exercise', {
                id: 5,
                question: 'Przykładowe pytanie 5',
                correctAnswer: 'Jakaś odpowiedź 1',
                answers: ['Jakaś odpowiedź 1', 'Jakaś odpowiedź 2', 'Jakaś odpowiedź 3', 'Jakaś odpowiedź 4'],
                topic:algebraTopic
            });
            let algebraExercise6 = realm.create('Exercise', {
                id: 6,
                question: 'Przykładowe pytanie 6',
                correctAnswer: 'Jakaś odpowiedź 1',
                answers: ['Jakaś odpowiedź 1', 'Jakaś odpowiedź 2', 'Jakaś odpowiedź 3', 'Jakaś odpowiedź 4'],
                topic:algebraTopic
            });
            
        });
        realm.close();
    }).catch(error => {
        console.log(error);
    });
};










