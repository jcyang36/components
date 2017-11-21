var person = function(){
    var fullName = "Jason Shapiro";

        var reg= new RegExp(/\d+/);
   return{
        setFullName :function(newValue){
            if(reg.test(newValue)){
                console.log("invalid name");
            }
            else{
                fullName = newValue;
            }

        if(reg.test(newValue)){
            console.log("Invalid Name");

        }
        else{
            fullName = newValue;
        }
    },
    getFullName :function(){
        return fullName;
    }
    };
}();

console.log(person.getFullName());
person.setFullName("Jim White");
console.log(person.getFullName());
person.setFullName(42);
person.fullName=42;
console.log(person.getFullName()); //...42 is printed.
