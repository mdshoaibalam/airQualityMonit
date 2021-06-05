
   export const getColorCode = (inputData) => {
        let colorCode = "";
        if (inputData > 0 && inputData < 51) {//Good
            colorCode = "#55a84f";
        } else if (inputData >= 51 && inputData < 101) {//Satisfactory
            colorCode = "#a3c853";
        }
        else if (inputData >= 101 && inputData < 201) { // moderate
            colorCode = "#fff833";
        }
        else if (inputData >= 201 && inputData < 301) { //Poor
            colorCode = "#f29c33";
        }
        else if (inputData >= 301 && inputData < 401) { //Very poor
            colorCode = "#e93f33";
        }
        else if (inputData >= 401 && inputData < 500) { //severe
            colorCode = "#af2d24";
        }
        return colorCode;
    }

