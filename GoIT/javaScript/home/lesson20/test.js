$(function() {
    var ToDo = function() {

        this.model = [
            //{ text: 'одеть трусы' },
            //{ text: 'купить молоко' },
            //{ text: 'сходить на работу' }
        ];

        this.inputField = $('.task-form__text');
        this.form = $('.task-form');
        this.todoList = $('.table__body');

        this.init();

    };


    // Получить размер нашей модели - колличество элементов на текущий момент
    ToDo.prototype.getLength = function(){
        return this.model.length;
    };

    // Сгененрировать html для новой строки с элементом
    ToDo.prototype.getItemHtml = function (position, item) {
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" data-index=":index" class="btn' +
            ' btn-info">&#8593;</button></td><td><button type="button" data-index=":index" class="btn' +
                ' btn-danger">☓</button></td></tr>';
        return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position - 1);
    };

    // Добавить новый элемент в список
    ToDo.prototype.addItem = function(todoText) {
        var newTodo = { text: todoText };
        this.model.push(newTodo);

        this.appendRenderItem(this.getLength(), newTodo);
    };

    // Добавить в DOM новый элемент в низ списка
    ToDo.prototype.appendRenderItem = function (index, item) {
        this.todoList.append(this.getItemHtml(index, item.text));
    };

    // на Сабмит формы
    ToDo.prototype.onFormSubmit = function(e){
        e.preventDefault();

        this.addItem(this.inputField.val());
        this.form.trigger('reset');

        $('.btn-primary').attr('disabled', 'disabled');
    };

    ToDo.prototype.renderList = function() {
        var list = '',
            __self = this;

        $.each(this.model, function(index, item){
            list += __self.getItemHtml(index+1, item.text);
        });

        this.todoList.html(list);
    };

    ToDo.prototype.removeItem = function(index) {
        this.model.splice(index, 1);

        this.renderList();
    };

    ToDo.prototype.sortItems = function(index) {
        var tmpl = this.model[index];

        if (index === 0) {
            this.model[index] = this.model[index + 1];
            this.model[index + 1] = tmpl;
        } else {
            this.model[index] = this.model[index - 1];
            this.model[index - 1] = tmpl;
        }
        this.renderList();
    };

    ToDo.prototype.init = function() {
        var __self = this;

        this.renderList();

        this.todoList.on('click', '.btn-info', function(e){
            var index = $(e.target).data('index');

            __self.sortItems(index);
        });

        this.todoList.on('click', '.btn-danger', function(e){
            var index = $(e.target).data('index');

            __self.removeItem(index);
        });


        this.inputField.on('focus', this, function(e){
            $('.btn-primary').removeAttr('disabled');
        });


        this.form.submit(function(e) {
            __self.onFormSubmit(e);
        });

    };

    window.todo = new ToDo();
});