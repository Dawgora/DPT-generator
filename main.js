element = new Vue({
    el: '#app',
    data: {
        exams: {
            first_exam:
            {
                turnedOn: false,
                name    : 'DPT I',
                question: [
                    {body: 'Šis ir tests 1', answer: 'tests bija pareizs 1'},
                    {body: 'Šis ir tests 2', answer: 'tests bija pareizs 2'},
                    {body: 'Šis ir tests 3', answer: 'tests bija pareizs 3'},
                    {body: 'Šis ir tests 4', answer: 'tests bija pareizs 4'}
                ]
            },

            second_exam:
            {
                turnedOn: false,
                name    : 'DPT II',
                question: [
                {body: 'Šis ir tests 21', answer: 'tests bija pareizs  21'},
                {body: 'Šis ir tests 22', answer: 'tests bija pareizs 22'},
                {body: 'Šis ir tests 23', answer: 'tests bija pareizs 23'},
                {body: 'Šis ir tests 24', answer: 'tests bija pareizs 24'}
            ]},

            third_exam:
            {
                turnedOn: false,
                name    : 'DPT III',
                question: [
                {body: 'Šis ir tests 31', answer: 'tests bija pareizs 31'},
                {body: 'Šis ir tests 32', answer: 'tests bija pareizs 32'},
                {body: 'Šis ir tests 33', answer: 'tests bija pareizs 33'},
                {body: 'Šis ir tests 34', answer: 'tests bija pareizs 34'}
            ]}
        }
        ,
        now: {},
        visible: false
    },

    methods: {
        getQuestion: function()
        {
           element1 = this.exams.first_exam;
           element2 = this.exams.second_exam;
           element3 = this.exams.third_exam;
           all      = [];

            element1.turnedOn ? all= all.concat(element1.question) : '';
            element2.turnedOn ? all= all.concat(element2.question) : '';
            element3.turnedOn ? all= all.concat(element3.question) : '';
           this.now = all[Math.floor(Math.random()* all.length)];
            this.visible = false;
        },
        toggleCourse: function(course)
        {
            course.turnedOn = !course.turnedOn;
        }
    }
});