//function
    function greet(name,callback)
    {
        console.log('Hi' + '' +name);
        callback();
    }
    //callback function
    function callMe()
    {
        console.log('I am callback function');
    }
    //passing funtion as an argument
        greet('Mudra',callMe);
