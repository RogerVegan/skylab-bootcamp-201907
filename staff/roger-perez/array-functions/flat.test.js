var array = [1,2,3,['a','b','c',[true,false]]]

//casde default

var result = flat(array);
    check(result,[1,2,3,['a','b','c',[true,false]]]);

//case depth 2

var result = flat(array,2);
    check(result,[1,2,3,['a','b','c',[true,false]]]);

//case no array

try{
    flat();
} check(error){
    check(error instanceof TypeError, true)
    check(error.message,'undefined is not an array')
}