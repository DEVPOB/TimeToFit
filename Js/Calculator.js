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


function Calculator() {
    let AgeInput = document.getElementById("Age").value;
    let HeightInput = document.getElementById("Height").value;
    let WeightInput = document.getElementById("Weight").value;
    let WaistInput = document.getElementById("Waist").value;
    let WristInput = document.getElementById("Wrist").value;
    let HipInput = document.getElementById("Hip").value;
    let UpperArmInput = document.getElementById("Upper-Arm").value;


    let result = "";
    try {
        let selected = document.querySelector("input[name='gender']:checked").value;
        result = selected;
    } catch (error) {
        return;
    }
    let select = document.getElementById('TDEE_ID');
    let BMI = document.getElementById("BMI");
    let BMR = document.getElementById("BMR");
    let TDEE = document.getElementById("TDEE");
    let BODY_FAT = document.getElementById("BODY-FAT");
    let BMI_Calculated = Math.floor(WeightInput / (HeightInput / 100 * HeightInput / 100))
    BMI.innerHTML = BMI_Calculated;
    if (result == "male") {
        // BMR Calculator
        let BodyMassMale = Math.floor(66 + (13.7 * WeightInput) + (5 * HeightInput) - (6.8 * AgeInput))
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
        let Pounds = WeightInput * 2.20;
        let FactorOne = (Pounds * 1.082) + 94.42;
        let FactorTwo = (WaistInput * 4.15);
        let LBM = FactorOne - FactorTwo;
        let BFM = Pounds - LBM;
        BODY_FAT.innerHTML = Math.floor((BFM * 100) / Pounds) + "%";
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
        let FactorOne = (WeightInput * 0.732) + 8.987;
        console.log(FactorOne);
        let FactorTwo = (WristInput / 3.140);
        let FactorThree = (WaistInput * 0.157);
        let FactorFour = (HipInput * 0.249);
        let FactorFive = (UpperArmInput * 0.434);
        let LBM = FactorOne + FactorTwo - FactorThree - FactorFour + FactorFive;
        let AmountBodyFat = WeightInput - LBM;
        console.log(AmountBodyFat);
        BODY_FAT.innerHTML = Math.floor(WeightInput * AmountBodyFat / 100) + "%";
    }
    
    if (AgeInput == "" || HeightInput == "" || WeightInput == "" || WaistInput == "") {
        return;
    }

}


window.addEventListener('scroll', NavbarChangePosition);
