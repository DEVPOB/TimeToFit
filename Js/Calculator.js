const bar = document.querySelector('.bar');
const header = document.querySelector('header');
bar.onclick = () => {
    const menu = document.querySelector('nav');
    menu.classList.toggle('show');
}
function NavbarChangePosition() {
    if (window.scrollY > 30) {
        header.style.position = "fixed";
    } else {
        header.style.position = "relative";
    }
    
}
let select = document.getElementById('TDEE_ID');
let BMI = document.getElementById("BMI");
let BMR = document.getElementById("BMR");
let TDEE = document.getElementById("TDEE");
let BODY_FAT = document.getElementById("BODY-FAT");
let result = "";

let Caloric_Reduction = document.getElementById('Caloric-Reduction');
let Caloric_Recommend = document.getElementById('Caloric-Recommend');

const MaleBtn = document.querySelector('.GenderMale');
const FeMaleBtn = document.querySelector('.GenderFeMale');
MaleBtn.addEventListener('click', () => {
    result = "male"
    MaleBtn.classList.add('activeMale'); 
    FeMaleBtn.classList.remove('activeFeMale');
});
FeMaleBtn.addEventListener('click', () => {
    result = "female"
    FeMaleBtn.classList.add('activeFeMale'); 
    MaleBtn.classList.remove('activeMale');

});






function Calculator() {
    let AgeInput = document.getElementById("Age").value;
    let HeightInput = document.getElementById("Height").value;
    let WeightInput = document.getElementById("Weight").value;
    let WaistInput = document.getElementById("Waist").value;
    let HipInput = document.getElementById("Hip").value;
    let NeckInput = document.getElementById("Neck").value;

    const inputIds = ["Age", "Height", "Weight", "Waist", "Hip", "Neck"];
    for (let i = 0; i < inputIds.length; i++) {
        const inputValue = document.getElementById(inputIds[i]).value;
        console.log(inputValue);
        if (inputValue === "") {
            alert("กรุณากรอกข้อมูลให้ครบ!");
            return;
        }else if(inputValue <= 0){
            alert("ไม่สามารถกรอกข้อมูลที่น้อยกว่าหรือเท่ากับ 0 ได้")
            return;
        }
    }
    if(result === ""){
        alert("กรุณาเลือกเพศของคุณ!");
        return;
    }
    
    let BMI_Calculated = Math.floor(WeightInput / (HeightInput / 100 * HeightInput / 100));
    BMI.innerHTML = BMI_Calculated;
    if (result == "male") {
        // BMR Calculator
        let BodyMassMale = Math.floor(66 + (13.7 * WeightInput) + (5 * HeightInput) - (6.8 * AgeInput));
        BMR.innerHTML = BodyMassMale;
        // TDEE
        let value = select.options[select.selectedIndex].value;

        switch (value) {
            case "One":
                TDEE.innerHTML = Math.floor(1.2 * BodyMassMale);
                break;
            case "Two":
                TDEE.innerHTML = Math.floor(1.375  * BodyMassMale);
                break;
            case "Three":
                TDEE.innerHTML = Math.floor(1.55  * BodyMassMale);
                break;
            case "Four":
                TDEE.innerHTML = Math.floor(1.7 * BodyMassMale);
                break;
            case "Five":
                TDEE.innerHTML = Math.floor(1.9 * BodyMassMale);
                break;
        }

        // BODY FAT Calculator
        WaistInput = WaistInput * 2.54;
        HipInput = HipInput * 2.54;
        NeckInput = NeckInput * 2.54;

        const waistNeck = WaistInput - NeckInput;


        const bfp = 495 / (1.0324 - 0.19077 * Math.log10(waistNeck) + 0.15456 * Math.log10(HeightInput)) - 450;
        BODY_FAT.innerHTML = Math.floor(bfp) + "%";
    }
    else if (result == "female") {
        let BodyMassFemale = Math.floor(665 + (9.6 * WeightInput) + (1.8 * HeightInput) - (4.7 * AgeInput))
        BMR.innerHTML = BodyMassFemale;   
        // TDEE
        let value = select.options[select.selectedIndex].value;
        switch (value) {
            case "One":
                TDEE.innerHTML = Math.floor(1.2 * BodyMassFemale);
                break;
            case "Two":
                TDEE.innerHTML = Math.floor(1.375  * BodyMassFemale);
                break;
            case "Three":
                TDEE.innerHTML = Math.floor(1.55  * BodyMassFemale);
                break;
            case "Four":
                TDEE.innerHTML = Math.floor(1.7 * BodyMassFemale);
                break;
            case "Five":
                TDEE.innerHTML = Math.floor(1.9 * BodyMassFemale);
                break;
        }
        // BodyFat
        WaistInput = WaistInput * 2.54;
        HipInput = HipInput * 2.54;
        NeckInput = NeckInput * 2.54;
        
        const waistHipNeck = WaistInput + HipInput - NeckInput;

        const bfp = 495 / (1.29579 - 0.35004 * Math.log10(waistHipNeck) + 0.22100 * Math.log10(HeightInput)) - 450;
        console.log(bfp);
        BODY_FAT.innerHTML = Math.floor(bfp) + "%";
    }
    
    const Result = document.getElementById("Neck");
    Result.scrollIntoView({
        behavior: "smooth"
    })

}

function DietPlanCal() {
    let TDEEDiet = parseInt(TDEE.textContent);
    let Weight_Goal = document.getElementById("Weight_Goal").value;
    let Day_Goal = document.getElementById("Day_Goal").value;
    let WeightInput = document.getElementById("Weight").value;

    if (TDEEDiet <= 1) {
        const CalculatorSection = document.getElementById("Calculate");
        CalculatorSection.scrollIntoView({
            behavior: "smooth"
        })
        alert("กรุณากรอกข้อมูลข้างบนให้ครบ")
        return;
    }
    
    const inputIds = ["Weight_Goal", "Day_Goal",];
    for (let i = 0; i < inputIds.length; i++) {
        const inputValue = document.getElementById(inputIds[i]).value;
        console.log(inputValue);
        if (inputValue === "") {
            alert("กรุณากรอกข้อมูลให้ครบ!");
            return;
        }else if(inputValue <= 0){
            alert("ไม่สามารถกรอกข้อมูลที่น้อยกว่าหรือเท่ากับ 0 ได้")
            return;
        }
    }


    let DailyCalorie_Raw = (WeightInput - Weight_Goal) / Day_Goal;
    let DailyCalorie_Reduce = DailyCalorie_Raw * 7700;
    let Daily_Recommend_Calorie = TDEEDiet - DailyCalorie_Reduce;

    Caloric_Reduction.innerHTML = Math.floor(DailyCalorie_Reduce);
    Caloric_Recommend.innerHTML = Math.floor(Daily_Recommend_Calorie);

}


window.addEventListener('scroll', NavbarChangePosition);
