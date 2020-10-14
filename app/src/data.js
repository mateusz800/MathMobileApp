import Realm from 'realm';

const CourseSchema = {
    name: 'Course',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        desc: 'string',
        images: 'string[]'
    }
}

export const initRealmDatabase = () => {
    Realm.open({ schema: [CourseSchema] }).then(realm => {
        realm.write(() => {
            realm.create('Course', {
                id: 1,
                name: 'algebra',
                desc: 'Zapoznaj się z trygonometrią',
                images: ['functions']
            })
        });
        realm.close();
    }).catch(error => {
        console.log(error);
    });
};


export const realm = new Realm({schema:[CourseSchema]});

