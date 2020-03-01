module.exports = function toReadable (number) {
    var unitsArr = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var dozensArr =['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if(number >= 0 && number <= 19){
        return unitsArr[number];
    }else if(number/100 >= 1){
        var one = Math.floor(number/100); // сотни 900
        if(number - 100*one > 19){
            var two = Math.floor((number - 100*one)/10); //десятки 60
            var three = number - 100*one - 10*two;   // еденицы 2
        }else{
            var two = number - 100*one;
            var three = 0;
        }
        if(two == 0 && three == 0){
            var number = unitsArr[one] + ' hundred';
        }else if(number - 100*one < 20){
            var number = unitsArr[one] + ' hundred ' + unitsArr[two];
        }else if(three == 0){
            var number = unitsArr[one] + ' hundred ' +  dozensArr[two-2];
        } else if(two == 0){
            var number = unitsArr[one] + ' hundred ' + unitsArr[three];
        }
        else{
            var number = unitsArr[one] + ' hundred ' +  dozensArr[two-2] + ' ' + unitsArr[three];
        }
    }else if(number/10 >= 1){
        var two = Math.floor(number /10);
        var three = number - 10*two;
        if(three == 0){
            var number =dozensArr[two-2];
        }else{
            var number =dozensArr[two-2] + ' ' + unitsArr[three];
        }

    }
    return number;
}