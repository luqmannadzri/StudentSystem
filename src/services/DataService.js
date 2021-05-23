import { db } from '../config/db';

export const addStudent =  (name, matricno, major, year, status) => {
	db.ref('/students').child(matricno).set({
        name: name,
        matricno: matricno,
        major: major,
        year: year,
        status: status
    }, () => {
        
        })
}

export const updateStudent =  (name, matricno, major, year, status) => {
    db.ref('/students').child(matricno).update({
        name: name,
        matricno: matricno,
        major: major,
        year: year,
        status: status
    }, () => {
        //this.props.navigation.navigate("List");
	alert("List");
        })
}

export const removeStudent =  (matricno) => {
    db.ref('/students').child(matricno).remove();
    Actions.ListScreen();
}
