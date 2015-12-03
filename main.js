new Vue({
    el: '#app',
    data: {
        first_exam:{ turnedOn: true,
            question: [
                {body: 'Šis ir tests', answer: 'tests bija pareizs'},
                {body: 'Šis ir tests 2', answer: 'tests bija pareizs 2'}
            ]
        },
        second_exam:{turnedOn: true, question:[]},
        third_exam:{turnedOn: true, question:[]},
        now: {}
    },

    methods: {
        getQuestion: function()
        {

        }
    }
});