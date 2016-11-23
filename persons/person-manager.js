var person = {
    name: '',
    sname: '',
    age: '',
    lang: []
};

var persons = [
    {
        name: 'Анастасия',
        sname: 'Матвиенко',
        age: '26',
        lang: ['js', 'html', 'css', 'php']
    },
    {
        name: 'Антон',
        sname: 'Чехов',
        age: '30',
        lang: ['html', 'php']
    },
    {
        name: 'Лев',
        sname: 'Толстой',
        age: '28',
        lang: ['ruby', 'php', 'с++']
    }
];

function getDataFromForm() {
    person.name = document.getElementById('name').value;
    person.sname = document.getElementById('sname').value;
    person.age = document.getElementById('age').value;
    person.lang = document.getElementById('lang').value.split(',');

    return person;
}
function addPerson() {
    persons.push(getDataFromForm());
}

for(var index = 0; index < persons.length; index++) {
    console.log(persons[index]);
    for( item in  persons[index])
        console.log(item + " " + persons[index][item]);
}

function viewPersons() {
    var template = '<tr><td>%name%</td><td>%sname%</td><td>%age%</td><td>%lang%</td></tr>';
    var table = '';

    var show = document.getElementsByTagName('tbody')[0];
    for (var i = 0; i < persons.length; i++) {
        table += template
            .replace('%name%', persons[i].name)
            .replace('%sname%', persons[i].sname)
            .replace('%age%', persons[i].age)
            .replace('%lang%', persons[i].lang)
        ;
    };
    show.innerHTML = table;
}

function deletePerson() {
    var del = prompt('Введите имя, которое необходимо удалить');
    for (var i = 0; i < persons.length; i++) {
        if (persons[i]['name'] == del) {
            persons.splice(i, 1);
        }
    }

}

function sortPersonsByName() {
    persons.sort(function(a, b) {
        if (a.name < b.name)
             return -1;
        if (a.name > b.name)
             return 1;
        return 0;
    });
}

function sortPersonsByAge() {
    persons.sort(function(a, b) {
        return a.age - b.age
    });
}

function sortPersonsByLang() {
    persons.sort(function(a, b) {
        return a.lang.length - b.lang.length
    });
}