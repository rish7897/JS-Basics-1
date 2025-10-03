    // line below used to print on the console
    console.log("namaste duniya version 3");
    let a = 'rishabh';
    {
        let b = 5;
        console.log(b);
        var pincode = 210432;
        console.log(pincode);
    }
    console.log(pincode);
    // console.log(b);
    console.log(a);

    const village = 'Sarila';

    // const variable can not assigned again
    // village = 'Dakore';
    console.log(village);

    let variable = 2;
    console.log(variable);

    variable = "Chennai";
    console.log(variable);

    variable = true;
    console.log(variable);

    let names = ['rishabh', 'mahak', 'rinki', 'surendra'];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    names[4] = 'raja';
    console.log(names[4]);

    let age = 25;
    (age >= 18) ? console.log('I can vote') : console.log("i can't vote");
    let status = (age >= 18) ? ('Yes vote') : ('No vote');
    console.log(status);

    let marks = 85;
    if(marks >= 90){
        console.log('A');
    }else if(marks >= 80){
        console.log('B');
    }else{
        console.log('C');
    }

    let num = 2;
    switch(num){
        case 1 : console.log('A');
        break;
        case 2 : console.log('B');
        break;
        case 3 : console.log('C');
        break;
        case 4 : console.log('D');
        break;
        default : console.log('E');
    }

    for(let i = 0; i < 5; i++){
        console.log(i);
    }

    let count = 0;
    while(count < 10){
        console.log('Rishabh' + count);
        count++;
    }

    let index = 0;
    do{
        console.log(index);
        index++;
    }while(index < 10)