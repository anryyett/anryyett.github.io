/**
 * Created by Elena on 10/17/2015.
 */
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99,
};
var max = 0;
var name="";
for(var p in tasksCompleted){
    if(tasksCompleted[p] > max){
        max = tasksCompleted[p];
        name = p;
    }
}
console.log(name);