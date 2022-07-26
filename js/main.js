// Bai 1
function admissionsManager() {

    const mathScore = Number(document.getElementById("mathScore").value);
    const literatureScore = Number(document.getElementById("literatureScore").value);
    const englishScore = Number(document.getElementById("englishScore").value);

    // Điểm chuẩn
    let benchMark = mathScore && literatureScore && englishScore;
    let alertBenchmark = "";

    function Score() {
        if (benchMark < 1) {
            alertBenchmark = `YOU CAN NOT PASS BENCHMARK with ${benchMark}`;
        }
        else {
            alertBenchmark = "NOW CHECK YOUR SCORE";
        }
        console.log(alertBenchmark)
        return;

    }
    Score();

    function inputScore()   {
        if (!benchMark || !mathScore || !literatureScore || !englishScore) {
            console.log(
                `Please input your score`
            );
            return;
        }
    }
    inputScore();
    // Count Score
    let countScore = Sumscore(mathScore, literatureScore, englishScore)

    let countAlert = "";

    function PassFail() {
        let scoreNeed = 0;
        if (countScore <= 15) {
            scoreNeed = 15 - countScore;
            countAlert = `You just need ${scoreNeed} to Pass`
        }
        else {
            scoreNeed = countScore;
            countAlert = `You Passed with ${scoreNeed}`
        }
        return countAlert;
    }
    PassFail();
    // document.getElementById("admissionsCheckingscore").innerHTML = alertBenchmark;
    document.getElementById("admissionsCheckingscore").innerHTML = `${countAlert}`;
    document.getElementById("admissionsChecking").innerHTML = `Your score now is: ${countScore}`;
}

admissionsManager();



function Sumscore(math, literature, english, area, subperson) {
    const priorityArea = document.getElementById("area").value;
    const subjectPerson = document.getElementById("subject").value;

    let priArea = function () {
        let addArea = 0;
        if (priorityArea === "areaX") {
            addArea = 0;
        }
        else if (priorityArea === "areaA") {
            addArea = 2;
        }

        else if (priorityArea === "areaB") {
            addArea = 1;
        }

        else if (priorityArea === "areaC") {
            addArea = 0.5;
        }
        return addArea;
    }
    priArea();


    let subPerson = function () {
        let addSubject = 0;
        if (subjectPerson === "subject0") {
            addSubject = 0;
        }
        else if (subjectPerson === "subject1") {
            addSubject = 2.5;
        }

        else if (subjectPerson === "subject2") {
            addSubject = 1.5;
        }

        else if (subjectPerson === "subject3") {
            addSubject = 1;
        }
        return addSubject;
    }
    subPerson();

    let sumScore = 0;
    sumScore = (math + literature + english + priArea() + subPerson()).toFixed(2);
    return sumScore;
}
Sumscore();






// Bai 2

function electricPay()  {

    // Input
    let customerName = String(document.getElementById("customerName").value);
    let customerElectric = Number(document.getElementById("customerElectric").value);


    let sumElec = electricSum(customerName, customerElectric)


    // Output
    document.getElementById("electricChecking").innerHTML = `${customerName} ${sumElec} VND`;
}
electricPay();


function electricSum  (name, customerElectric)  {
    
    let electricCount = 0;
    let electricAlert = "";
    function electric() {
        
        // Tinh tien dien theo LV = tiendienlv1 + tiendienlv2 + tiendienlv3 +++
        if (customerElectric <= 50) {
            electricCount = customerElectric * 500
            electricAlert = `Electric bill ${customerElectric}Kw is: ${electricCount} `
        }
        else if (customerElectric >= 50 && customerElectric < 100)   {
            electricCount = 50 * 500 + customerElectric * 650
            electricAlert = `Electric bill ${customerElectric}Kw is: ${electricCount} `
        }
        else if (customerElectric >= 100 && customerElectric < 150)    {
            electricCount = 50 * 500 + 50 * 650 + customerElectric * 850
            electricAlert = `Electric bill ${customerElectric}Kw is: ${electricCount} `
        }
        else if (customerElectric >= 150 && customerElectric < 200)    {
            electricCount = 50 * 500 + 50 * 650 + 50 * 850 + customerElectric * 1100
            electricAlert = `Electric bill ${customerElectric}Kw is: ${electricCount} `
        }
        else    {
            electricCount = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + customerElectric * 1300
            electricAlert = `Electric bill ${customerElectric}Kw is: ${electricCount} `
        }

    }
    electric();
    return electricAlert;
}
electricSum();